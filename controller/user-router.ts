import express, { Request, Response } from "express";
const { UserModel } = require("../model/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
import { UserRequestBody } from "../types";

userRouter.post("/signup", async (req: Request, res: Response) => {
  const { username, email, password, phoneNo, landlineNo, address } =
    req.body as UserRequestBody;
  try {
    bcrypt.hash(password, 5, async (err: Error | null, hash: string | null) => {
      const user = new UserModel({
        username,
        email,
        password: hash,
        phoneNo,
        landlineNo,
        address,
      });
      await user.save();
      res.status(200).send({ msg: "Registration Successful" });
    });
  } catch (err) {
    res.status(400).send({ error: (err as Error)?.message });
  }
});

userRouter.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(
        password,
        user.password,
        (err: Error | null, result: boolean) => {
          if (result) {
            res.status(200).send({
              message: "Login Successful",
              username: user.username,
              token: jwt.sign({ id: user._id }, "tom"),
            });
          }
        }
      );
    } else {
      res.status(400).send({ message: "Wrong Credentials" });
    }
  } catch (err) {
    res.status(400).send({ message: "Wrong Credentials" });
    console.log(err);
  }
});

userRouter.get("/customers", async (req: Request, res: Response) => {
  try {
    const Response = await UserModel.find();
    res.status(200).send(Response);
  } catch (err) {
    res.status(400).send({ error: (err as Error)?.message });
    console.log(err);
  }
});

userRouter.delete("/delete/:_id", async (req: Request, res: Response) => {
  try {
    const removedCartItem = await UserModel.findByIdAndRemove(req.params._id);
    res.json(removedCartItem);
  } catch (error) {
    res.status(500).json({ message: (error as Error)?.message });
  }
});

export { userRouter };
