const express = require("express");

const authMiddleware = require("../middlewares/auth-middleware");

const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getLikePosts,
  createLikePost,
  deletePosts,
} = require("../controllers/post.controller");

const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/like", authMiddleware, getLikePosts);
router.get("/posts/:id", getPost);

router.post("/posts", authMiddleware, createPost);
router.post("/posts/:id/like", authMiddleware, createLikePost);

router.put("/posts", authMiddleware, updatePost);

router.delete("/posts/:id", authMiddleware, deletePost);
// 테스트용
router.delete("/posts", deletePosts);

module.exports = router;
