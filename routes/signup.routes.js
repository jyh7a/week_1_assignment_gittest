const express = require("express");

const { createUser } = require("../controllers/user.controller");

const router = express.Router();

router.post("/signup", createUser);

module.exports = router;
