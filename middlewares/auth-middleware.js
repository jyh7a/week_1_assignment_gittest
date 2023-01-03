const jwt = require("jsonwebtoken");
const { User } = require("../models");

require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    // 조기리턴
    if (!req.cookies || !req.cookies.jwt) {
      return res.status(400).send({ errorMessage: "로그인후 사용가능한 api" });
    }

    const {
      jwt: { token },
    } = req.cookies;

    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findOne({
        where: { id },
      });
      res.locals.user = user;
      next();
    } catch (error) {
      console.log(error);
      res.status(500).send({ errorMessage: error.message });
    }
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send({ errorMessage: error.message });
  }
};
