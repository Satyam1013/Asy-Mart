import express, { Request, Response } from "express";
const { HomeModel } = require("../model/home-model");
const homeRouter = express.Router();

homeRouter.get("/", async (req: Request, res: Response) => {
  try {
    const home = await HomeModel.find();
    res.status(200).send(home);
  } catch (err) {
    res.status(500).send({ error: (err as Error)?.message });
  }
});

export { homeRouter };
