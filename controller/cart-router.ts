import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const { CartModel } = require("../model/cart-model");
const cartRouter = require("express").Router();
import { Cart, DecodedToken } from "../types";

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
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "tom") as DecodedToken;

  if (decoded) {
    const cartItemData = req.body as Cart;

    try {
      const newCartItem = await CartModel.create({
        ...cartItemData,
        userID: decoded.id,
      });

      res.status(200).json({ message: "Added to Cart", data: newCartItem });
    } catch (err) {
      res.status(400).json({ message: "Already present in your Cart" });
    }
  } else {
    res.status(401).json({ message: "Invalid token" });
  }
});

cartRouter.patch("/update/:_id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "tom") as DecodedToken;
    const cartItem = await CartModel.findById(req.params._id);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    if (cartItem.userID !== decoded.id) {
      return res.status(403).json({ message: "Access forbidden. This cart does not belong to the authenticated user." });
    }

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
    const decoded = jwt.verify(req.headers.authorization, "tom") as DecodedToken;
    const cartItem = await CartModel.findById(req.params._id);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    if (cartItem.userID !== decoded.id) {
      return res.status(403).json({ message: "Access forbidden. This cart does not belong to the authenticated user." });
    }

    const removedCartItem = await CartModel.findByIdAndRemove(req.params._id);
    res.json(removedCartItem);
  } catch (error) {
    res.status(500).json({ message: (error as Error)?.message });
  }
});

export { cartRouter };
