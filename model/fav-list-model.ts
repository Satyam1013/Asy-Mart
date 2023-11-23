import mongoose, { Model } from "mongoose";
import { FavListDocument } from "../types";

const favListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  discount_price: Number,
  quantity: Number,
  userID: String,
});

const FavListModel: Model<FavListDocument> = mongoose.model<FavListDocument>("fav-list", favListSchema);

export { FavListModel };
