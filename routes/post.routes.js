const express = require("express");
const router = express.Router();

const {createPosts} = require("../controllers/post.controller")

router.post("/posts", createPosts);

module.exports = router;