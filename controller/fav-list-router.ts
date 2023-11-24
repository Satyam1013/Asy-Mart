const { FavListModel } = require("../model/fav-list-model");
import { Request, Response } from "express";
const favListRouter = require("express").Router();
const jwt = require("jsonwebtoken");
import { DecodedToken, FavList } from "../types";

favListRouter.get("/", async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "tom") as DecodedToken;
  try {
    if (decoded) {
      const data = await FavListModel.find({ userID: decoded.id });
      res.status(200).send(data);
    }
  } catch (err) {
    res.status(400).send({ error: (err as Error)?.message });
  }
});

favListRouter.post("/post", async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "tom") as DecodedToken;

  if (decoded) {
    const cartItemData = req.body as FavList;

    try {
      const newCartItem = await FavListModel.create({
        ...cartItemData,
        userID: decoded.id,
      });

      res.status(200).json({ message: "Added to Favorite List", data: newCartItem });
    } catch (err) {
      res.status(400).json({ message: "Already present in your Favorite List" });
    }
  } else {
    res.status(401).json({ message: "Invalid token" });
  }
});

favListRouter.delete("/delete/:_id", async (req: Request, res: Response) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, "tom") as DecodedToken;
    const cartItem = await FavListModel.findById(req.params._id);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    if (cartItem.userID !== decoded.id) {
      return res.status(403).json({ message: "Access forbidden. This cart does not belong to the authenticated user." });
    }

    const removedCartItem = await FavListModel.findByIdAndRemove(req.params._id);
    res.json(removedCartItem);
  } catch (error) {
    res.status(500).json({ message: (error as Error)?.message });
  }
});

export { favListRouter };