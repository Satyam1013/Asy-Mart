import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

const authenticator = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token, "tom") as { id: string };
      if (decoded) {
        req.body.userID = decoded.id;
        next();
      } else {
        res.status(500).send({ warning: "Please Login First!" });
      }
    } catch (error) {
      res.status(500).send({ warning: "Invalid Token!" });
    }
  } else {
    res.status(500).send({ warning: "Please Login First!" });
  }
};

export { authenticator };
