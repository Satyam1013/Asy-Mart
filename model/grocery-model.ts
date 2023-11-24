import mongoose, { Schema, Model } from 'mongoose';
import { GroceryDocument } from '../types';

const grocerySchema = new Schema<GroceryDocument>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: Number,
    discount_price: Number,
    brand: String,
    discount: String,
    stock: Number,
    rating: Number,
    description: String,
    isAvailable: Boolean,
    isVisible: Boolean,
    quantity: Number
  },
  {
    versionKey: false,
  }
);

const GroceryModel: Model<GroceryDocument> = mongoose.model('grocery', grocerySchema);

export { GroceryModel };
