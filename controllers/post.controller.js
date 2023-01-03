const { Op } = require("sequelize");
const { User, Post, Like, sequelize } = require("../models");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    console.log({ posts });

    res.send({ posts });
  } catch (error) {
    console.log(error);
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    // 조기 리턴
    // user가 없을때
    const user = await User.findAll({
      where: { id: userId },
    });
    if (user.length <= 0) {
      return res.status(400).send({ errorMessage: "해당 사용자가 없습니다." });
    }
    // console.log(user);

    const post = await Post.findAll({
      where: { id },
    });
    console.log({ post });

    res.send({ post });
  } catch (error) {
    console.log(error);
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    // const { id } = req.params;
    const user = res.locals.user;
    const { id, title, content } = req.body;

    // 조기 리턴
    // user가 없을때
    // const user = await User.findAll({
    //   where: { id },
    // });
    // if (user.length <= 0) {
    //   return res.status(400).send({ errorMessage: "해당 사용자가 없습니다." });
    // }
    // console.log(user);

    try {
      const post = await Post.create({ userId: id, title, content });
      console.log({ post });
      res.status(201).send({ post });
    } catch (error) {
      console.log(error);
      if (error.original?.sqlMessage) {
        return res
          .status(500)
          .send({ errorMessage: error.original?.sqlMessage });
      }
      res.status(500).send({ errorMessage: error.message });
    }
  } catch (error) {
    console.log(error);
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id, userId, title, content } = req.body;

    // 조기 리턴
    // user가 없을때
    const user = await User.findAll({
      where: { id: userId },
    });
    if (user.length <= 0) {
      return res.status(400).send({ errorMessage: "해당 사용자가 없습니다." });
    }
    // console.log(user);

    const result = await Post.update({ title, content }, { where: { id } });
    console.log({ result });

    res.send({ result });
  } catch (error) {
    console.log(error);
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    // 조기 리턴
    // user가 없을때
    const user = await User.findAll({
      where: { id: userId },
    });
    if (user.length <= 0) {
      return res.status(400).send({ errorMessage: "해당 사용자가 없습니다." });
    }
    // console.log(user);

    const result = await Post.destroy({
      where: { id },
    });
    console.log({ result });

    res.send({ result });
  } catch (error) {
    console.log(error);
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const getLikePosts = async (req, res) => {
  try {
    let likePosts = await Post.findAll({
      include: [Like],
      required: false,
    });

    likePosts = likePosts.filter((likePost) => {
      if (likePost.dataValues.Likes.length > 0) {
        return likePost;
      }
    });
    console.log({ likePosts });

    res.send({ likePosts });
  } catch (error) {
    console.log(error);
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const createLikePost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const { userId } = req.body;

    // 조기 리턴
    // user가 없을때
    const user = await User.findAll({
      where: { id: userId },
    });
    if (user.length <= 0) {
      return res.status(400).send({ errorMessage: "해당 사용자가 없습니다." });
    }
    // console.log(user);

    // post가 없을때
    const post = await Post.findAll({
      where: { id: postId },
    });
    if (post.length <= 0) {
      return res.status(400).send({ errorMessage: "해당 글이 없습니다." });
    }
    // console.log(post);

    try {
      const like = await Like.create({ userId, postId });
      // if (postId) {
      //   const like = await Like.create({ userId, postId, commentId});
      // } else {
      //   const like = await Like.create({ userId, postId });
      // }
      console.log({ like });
      res.status(201).send({ like });
    } catch (error) {
      console.log(error);
      if (error.original?.sqlMessage) {
        return res
          .status(500)
          .send({ errorMessage: error.original?.sqlMessage });
      }
      res.status(500).send({ errorMessage: error.message });
    }
  } catch (error) {
    console.log(error);
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

// 테스트용
const deletePosts = async (req, res) => {
  try {
    const result = await Post.destroy({
      where: {},
    });
    console.log({ result });

    res.send({ result });
  } catch (error) {
    console.log(error);
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getLikePosts,
  createLikePost,
  deletePosts,
};
