import mongoose, { Schema, Model } from 'mongoose';
import { VegetablesDocument } from '../types';

const vegetablesSchema = new Schema<VegetablesDocument>(
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

const VegetablesModel: Model<VegetablesDocument> = mongoose.model('vegetable', vegetablesSchema);

export { VegetablesModel };
