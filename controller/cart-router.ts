import express, { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const { CartModel } = require("../model/cart-model");
const cartRouter = require("express").Router();
import { DecodedToken } from "../types";
import { Document } from "mongoose";

cartRouter.get("/", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "tom") as DecodedToken;

    if (decoded) {
      const data = await CartModel.find({ userID: decoded.id });
      res.status(200).send(data);
    }
  } catch (err) {
    res.status(400).send({ error: (err as Error)?.message });
  }
});

cartRouter.post("/post", async (req: Request, res: Response) => {
  const cartItem = new CartModel(req.body as Document);
  try {
    const newCartItem = await cartItem.save();
    res.status(200).json({ message: "Added in Cart", data: newCartItem });
  } catch (err) {
    res.status(400).json({ message: "Already present in your Cart" });
  }
});

cartRouter.patch("/update/:_id", async (req: Request, res: Response) => {
  try {
    const updatedCartItem = await CartModel.findByIdAndUpdate(
      req.params._id,
      req.body
    );
    res.status(200).json(updatedCartItem);
  } catch (err) {
    res.status(400).json({ message: (err as Error)?.message });
  }
});

cartRouter.delete("/delete/:_id", async (req: Request, res: Response) => {
  try {
    const removedCartItem = await CartModel.findByIdAndRemove(req.params._id);
    res.json(removedCartItem);
  } catch (error) {
    res.status(500).json({ message: (error as Error)?.message });
  }
});

export { cartRouter };
