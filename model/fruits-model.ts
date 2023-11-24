import mongoose, { Schema, Model } from 'mongoose';
import { FruitsDocument } from '../types';

const fruitSchema = new Schema<FruitsDocument>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: Number,
    discount_price: Number,
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

const FruitModel: Model<FruitsDocument> = mongoose.model('fruit', fruitSchema);

export { FruitModel };
