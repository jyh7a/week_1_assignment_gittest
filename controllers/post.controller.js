const { sequelize, User, Post, Comment, Like } = require("../models");

const createPosts = async (req, res) => {
  try {
    // 등록하는 로직
    const { id: userId, title, content } = req.body;

    if (Object.keys(req.body).length <= 0) {
      return res
        .status(412)
        .send({ errorMessage: "데이터 형식이 올바르지 않습니다." });
    }

    // if (typeof title !== "string") {
    //   return res
    //     .status(412)
    //     .send({ errorMessage: "게시글 제목의 형식이 일치하지 않습니다." });
    // }

    // 조기 리턴

    try {
      const post = await Post.create({ userId, title, content });
      console.log({ post });
      res.status(201).send({ post });
    } catch (error) {
      console.error(error);
      res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ errorMessage: error });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({});

    res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    res.status(400).send({ "errorMessage": "게시글 조회에 실패하였습니다." });
  }
}

module.exports = { createPosts, getPosts };
