const express = require("express");

const userRouter = require("./routes/user.routes.js");

const app = express();
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", [userRouter]);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
