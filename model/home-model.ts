import mongoose, { Model } from "mongoose";
import { HomeDocument } from "../types";

const homeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: Number,
  discount_price: Number,
  discount: String,
  stock: Number,
  rating: Number,
  review: String,
  description: String,
  isAvailable: String,
});

const HomeModel: Model<HomeDocument> = mongoose.model<HomeDocument>("home", homeSchema);

export { HomeModel };
