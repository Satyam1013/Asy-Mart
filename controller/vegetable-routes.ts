import express, { Request, Response } from "express";
const { VegetablesModel } = require("../model/vegetables-model");
import { VegetablesDocument } from "../types";

const vegetablesRouter = express.Router();

vegetablesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const page: number = parseInt(req.query.page as string) - 1 || 0;
    const limit: number = parseInt(req.query.limit as string);
    const category: string[] = Array.isArray(req.query.category)
      ? req.query.category.map(String)
      : typeof req.query.category === "string"
      ? [req.query.category]
      : ["All"];

    const sort: string | string[] = Array.isArray(req.query.sort)
      ? req.query.sort.map(String)
      : typeof req.query.sort === "string"
      ? req.query.sort
      : "discount_price";

    const search: string = (req.query.search as string) || "";

    let sortBy: { [key: string]: string } = {};

    if (Array.isArray(sort) && sort.length === 2) {
      sortBy[sort[0]] = sort[1];
    } else if (typeof sort === "string") {
      sortBy[sort] = "asc";
    }

    const sortByCategory: string[] = [
      "All",
      "Root Vegetables",
      "Leafy Vegetables",
      "Cruciferous Vegetables",
      "Marrow Vegetables",
      "Allium Vegetables",
    ];

    const vegetableCategory = category.includes("All")
      ? [...sortByCategory]
      : category;

    const vegetableModelDocument = await VegetablesModel.find({
      title: { $regex: search, $options: "i" },
      description: { $regex: search, $options: "i" },
    })
      .where("category")
      .in([...vegetableCategory])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const response = {
      error: false,
      items: vegetableModelDocument.length,
      page: page + 1,
      limit,
      category: sortByCategory,
      vegetableModelDocument,
    };
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ error: (err as Error)?.message });
  }
});

vegetablesRouter.get("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const response: VegetablesDocument | null = await VegetablesModel.findById(
      id
    );
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ error: (err as Error)?.message });
  }
});

vegetablesRouter.post("/post", async (req: Request, res: Response) => {
  const cartItem: VegetablesDocument = new VegetablesModel(req.body);
  try {
    const newCartItem: VegetablesDocument = await cartItem.save();
    res.status(200).json({ message: "Added in the DB", data: newCartItem });
  } catch (err) {
    res.status(400).json({ message: (err as Error)?.message });
  }
});

vegetablesRouter.patch("/update/:_id", async (req: Request, res: Response) => {
  const id: string = req.params._id;
  try {
    const updatedCartItem: VegetablesDocument | null =
      await VegetablesModel.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedCartItem);
  } catch (err) {
    res.status(400).json({ message: (err as Error)?.message });
  }
});

export { vegetablesRouter };
