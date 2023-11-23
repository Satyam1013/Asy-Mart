import { connection } from "./database";
import { userRouter } from "./controller/user-router";
import { favListRouter } from "./controller/fav-list-router";
import { authenticator } from "./middleware/authenticator";
import { homeRouter } from "./controller/home-router"; 
import { cartRouter } from "./controller/cart-router"; 
import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/employee", userRouter);
// app.use(authenticator);
app.use("/home", homeRouter);
app.use("/cart", cartRouter);
app.use("/fav-list", favListRouter);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await connection;
    console.log(`Connected to ${port} port`);
  } catch (err) {
    console.log(err);
  }
});
