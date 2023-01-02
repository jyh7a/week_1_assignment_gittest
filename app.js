const express = require("express");

const userRouter = require("./routes/user.routes.js");
const postRouter = require("./routes/post.routes.js");

const app = express();
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", [userRouter, postRouter]);

app.listen(process.env.PORT, () => {
  console.log(`http://127.0.0.1:${process.env.PORT}`);
});
