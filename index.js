const { connection } = require("./database");
const { userRouter } = require("./controller/userRouter");
const { authenticator } = require("./middleware/authenticator");
const express = require("express");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use(authenticator);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to 5000 port");
  } catch (err) {
    console.log(err);
  }
});
