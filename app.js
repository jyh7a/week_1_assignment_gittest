const express = require("express");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user.routes.js");
const singupRouter = require("./routes/signup.routes.js");
const loginRouter = require("./routes/login.routes.js");
const postRouter = require("./routes/post.routes.js");

const app = express();
app.use(express.json());
app.use(cookieParser());
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`http://127.0.0.1:${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", [singupRouter, loginRouter, userRouter, postRouter]);