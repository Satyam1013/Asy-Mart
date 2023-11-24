import express, { Request, Response } from "express";
const { ToiletriesModel } = require("../model/toiletries-model");
import { ToiletriesDocument } from "../types";

const toiletriesRouter = express.Router();

toiletriesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const page: number = parseInt(req.query.page as string) - 1 || 0;
    const limit: number = parseInt(req.query.limit as string);
    const category: string[] = Array.isArray(req.query.category)
      ? req.query.category.map(String)
      : typeof req.query.category === "string"
      ? [req.query.category]
      : ["All"];

    const brand: string[] = Array.isArray(req.query.brand)
      ? req.query.brand.map(String)
      : typeof req.query.brand === "string"
      ? [req.query.brand]
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
      "Hair Care",
      "Oral Care",
      "Miscellaneous",
      "Personal Care",
    ];

    const sortByBrand: string[] = [
      "All",
      "US POLO",
      "VeBNoR",
      "EyeBogler",
      "BLIVE",
      "LEVI'S",
      "PUMA",
      "Raymond",
      "Spykar",
      "Peter England",
      "Nonstrum",
      "Lee Cooper",
      "Wrangler",
      "Calvin Klien",
      "Sparx",
      "asian",
      "BIRDE",
      "Nike",
      "Adidas",
      "Funcky",
      "Armani",
      "Sonata",
      "Titan",
      "Fastrack",
    ];

    const toiletryCategory = category.includes("All")
      ? [...sortByCategory]
      : category;

    const toiletryBrand = brand.includes("All") ? [...sortByBrand] : brand;

    const toiletModelDocument = await ToiletriesModel.find({
      title: { $regex: search, $options: "i" },
    })
      .where("category")
      .in([...toiletryCategory])
      .where("brand")
      .in([...toiletryBrand])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const response = {
      error: false,
      items: toiletModelDocument.length,
      page: page + 1,
      limit,
      category: sortByCategory,
      brand: sortByBrand,
      toiletModelDocument,
    };
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ error: (err as Error)?.message });
  }
});

toiletriesRouter.get("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const response: ToiletriesDocument | null = await ToiletriesModel.findById(
      id
    );
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ error: (err as Error)?.message });
  }
});

toiletriesRouter.post("/post", async (req: Request, res: Response) => {
  const cartItem: ToiletriesDocument = new ToiletriesModel(req.body);
  try {
    const newCartItem: ToiletriesDocument = await cartItem.save();
    res.status(200).json({ message: "Added in the DB", data: newCartItem });
  } catch (err) {
    res.status(400).json({ message: (err as Error)?.message });
  }
});

toiletriesRouter.patch("/update/:_id", async (req: Request, res: Response) => {
  const id: string = req.params._id;
  try {
    const updatedCartItem: ToiletriesDocument | null =
      await ToiletriesModel.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedCartItem);
  } catch (err) {
    res.status(400).json({ message: (err as Error)?.message });
  }
});

export { toiletriesRouter };
