const express = require("express");
const jwt = require("jsonwebtoken");
const bodyparser = require('body-parser')
const dotenv = require("dotenv");
const cors = require("cors");
const noticeRouter = require("./route/noticeRouter");
const userRouter = require("./route/userRouter");
const { default: mongoose } = require("mongoose");
const app = express();
dotenv.config();
// app.use(bodyparser.urlencoded({ extended: true }))
// app.use(bodyparser.json())
app.use(express.json());
app.use(cors());
app.use("/", noticeRouter);
app.use("/", userRouter);
mongoose
  .connect("mongodb://localhost:27017/Notice", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server Started");
});
