const { favListModel } = require("../model/fav-list-model");
import { Request, Response } from "express";
import { Document } from "mongoose";
const favListRouter = require("express").Router();
const jwt = require("jsonwebtoken");
import { DecodedToken } from "../types";

favListRouter.get("/", async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "tom") as DecodedToken;
  try {
    if (decoded) {
      const data = await favListModel.find({ userID: decoded.id });
      res.status(200).send(data);
    }
  } catch (err) {
    res.status(400).send({ error: (err as Error)?.message });
  }
});

favListRouter.post("/post", async (req: Request, res: Response) => {
  const cartItem = new favListModel(req.body as Document);
  try {
    const newFavoriteItem = await cartItem.save();
    res.status(200).json({ message: "Added in Favorite List", data: newFavoriteItem });
  } catch (err) {
    res.status(400).json({ message: "Already present in your Favorite List" });
  }
});

favListRouter.delete("/delete/:_id", async (req: Request, res: Response) => {
  try {
    const removedCartItem = await favListModel.findByIdAndRemove(req.params._id);
    res.json(removedCartItem);
  } catch (error) {
    res.status(500).json({ message: (error as Error)?.message });
  }
});

export { favListRouter };