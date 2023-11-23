import mongoose, { Model } from "mongoose";
import { CartDocument } from "../types";

const cartSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  discount_price: Number,
  quantity: Number,
  userID: String,
});

const CartModel: Model<CartDocument> = mongoose.model<CartDocument>("cart", cartSchema);

export { CartModel };
