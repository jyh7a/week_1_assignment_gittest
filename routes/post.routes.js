const express = require("express");
const router = express.Router();
const { auth_middleware } = require("../middlewares/auth-middleware");

const {
  createPosts,
  getPosts,
  detailPost,
  updatePosts,
  deletePosts,
} = require("../controllers/post.controller");

// 게시글 전체 조회 - All
router.get("/posts", getPosts);
// 게시글 상세 조회 - All
router.get("/posts/:id", detailPost);
// 게시글 등록 - User
router.post("/posts", auth_middleware, createPosts);
// 게시글 수정 - User
router.post("/posts", auth_middleware, updatePosts);
// 게시글 삭제 - User
router.delete("/posts/:id", auth_middleware, deletePosts);

// 좋아요 게시글 조회 - 내가쓴 글의 좋아요가 달린 글만 보이게 만들면됩니다.

module.exports = router;
