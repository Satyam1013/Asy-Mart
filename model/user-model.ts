import mongoose, { Model } from "mongoose";
import { UserDocument } from "../types";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  phoneNo: { type: Number, required: true, unique: true },
  landlineNo: { type: Number, unique: true },
  address: { type: String, required: true },
});

const UserModel: Model<UserDocument> = mongoose.model<UserDocument>("employee", userSchema);

export { UserModel };
