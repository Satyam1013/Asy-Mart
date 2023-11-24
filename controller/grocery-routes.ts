import express, { Request, Response } from "express";
const { GroceryModel } = require("../model/grocery-model");
import { GroceryDocument } from "../types";

const groceriesRouter = express.Router();

groceriesRouter.get("/", async (req: Request, res: Response) => {
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
      "Pasta and Grains",
      "Baking Essentials",
      "Canned Goods",
      "Dairy",
      "Cooking Oils",
      "Legumes and Lentils",
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

    const groceryCategory = category.includes("All")
      ? [...sortByCategory]
      : category;
    const groceryBrand = brand.includes("All") ? [...sortByBrand] : brand;

    const groceryModelDocument = await GroceryModel.find({
      title: { $regex: search, $options: "i" },
    })
      .where("category")
      .in([...groceryCategory])
      .where("brand")
      .in([...groceryBrand])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const response = {
      error: false,
      items: groceryModelDocument.length,
      page: page + 1,
      limit,
      category: sortByCategory,
      brand: sortByBrand,
      groceryModelDocument,
    };
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ error: (err as Error)?.message });
  }
});

groceriesRouter.get("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const response: GroceryDocument | null = await GroceryModel.findById(id);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ error: (err as Error)?.message });
  }
});

groceriesRouter.post("/post", async (req: Request, res: Response) => {
  const cartItem: GroceryDocument = new GroceryModel(req.body);
  try {
    const newCartItem: GroceryDocument = await cartItem.save();
    res.status(200).json({ message: "Added in the DB", data: newCartItem });
  } catch (err) {
    res.status(400).json({ message: (err as Error)?.message });
  }
});

groceriesRouter.patch("/update/:_id", async (req: Request, res: Response) => {
  const id: string = req.params._id;
  try {
    const updatedCartItem: GroceryDocument | null =
      await GroceryModel.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedCartItem);
  } catch (err) {
    res.status(400).json({ message: (err as Error)?.message });
  }
});

export { groceriesRouter };
