import mongoose, { Schema, Model } from 'mongoose';
import { ToiletriesDocument } from '../types';

const toiletriesSchema = new Schema<ToiletriesDocument>(
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
    brand: String,
    isVisible: Boolean,
    quantity: Number,
  },
  {
    versionKey: false,
  }
);

const ToiletriesModel: Model<ToiletriesDocument> = mongoose.model('toiletry', toiletriesSchema);

export { ToiletriesModel };
