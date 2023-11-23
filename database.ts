import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = mongoose.connect(process.env.MONGODB as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

export { connection };
