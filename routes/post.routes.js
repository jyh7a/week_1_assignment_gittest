const express = require("express");
const router = express.Router();

const { createPosts, getPosts } = require("../controllers/post.controller")

router.post("/posts", createPosts);
router.get("/posts", getPosts);

module.exports = router;