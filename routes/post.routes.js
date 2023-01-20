const express = require("express");
const router = express.Router();
const {auth_middleware} = require('../middlewares/auth-middleware')

const { createPosts, getPosts, detailPost, deletePosts } = require("../controllers/post.controller")

// 게시글 전체 조회 - All
router.get("/posts", getPosts);
// 게시글 상세 조회 - All
router.get("/posts/:id", detailPost)
// 게시글 등록 - User 
router.post("/posts", auth_middleware, createPosts);
// 게시글 삭제 - User
router.delete("/posts/:id", auth_middleware, deletePosts)
// 게시글 수정 - User

module.exports = router; 