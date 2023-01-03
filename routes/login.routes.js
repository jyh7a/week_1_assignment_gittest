const express = require("express");

const { login } = require("../controllers/user.controller");

const router = express.Router();

router.post("/login", login);

module.exports = router;
