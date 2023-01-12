const express = require("express");
const router = express.Router();
const {auth_middleware} = require('../middlewares/auth-middleware')

const { createPosts, getPosts } = require("../controllers/post.controller")

router.post("/posts", auth_middleware, createPosts);
router.get("/posts", getPosts);

module.exports = router;