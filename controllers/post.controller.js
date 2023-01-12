const { Op } = require("sequelize");
const { User, Post, Like, sequelize } = require("../models");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();

    res.send({ posts });
  } catch (error) {
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = res.locals.user;
    const { userId } = req.body;
    // 조기 리턴
    // user가 없을때
    const user = await User.findAll({
      where: { id: userId },
    });
    if (user.length <= 0) {
      return res.status(400).send({ errorMessage: "해당 사용자가 없습니다." });
    }
    //

    const post = await Post.findAll({
      where: { id },
    });

    res.send({ post });
  } catch (error) {
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { id } = res.locals.user;
    const { title, content } = req.body;

    // 조기리턴
    if (!title || !content) {
      return res
        .status(412)
        .send({ errorMessage: "데이터 형식이 올바르지 않습니다." });
    }
    if (typeof title !== "string") {
      return res
        .status(412)
        .send({ errorMessage: "게시글 제목의 형식이 일치하지 않습니다." });
    }
    if (typeof content !== "string") {
      return res
        .status(412)
        .send({ errorMessage: "게시글 내용의 형식이 일치하지 않습니다." });
    }

    try {
      await Post.create({ userId: id, title, content });
      res.status(201).send({ message: "게시글 작성에 성공하였습니다." });
    } catch (error) {
      if (error.original?.sqlMessage) {
        return res
          .status(500)
          .send({ errorMessage: error.original?.sqlMessage });
      }
      res.status(500).send({ errorMessage: error.message });
    }
  } catch (error) {
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = res.locals.user;
    const { title, content } = req.body;

    // 조기리턴
    if (!title || !content) {
      return res
        .status(412)
        .send({ errorMessage: "데이터 형식이 올바르지 않습니다." });
    }
    if (typeof title !== "string") {
      return res
        .status(412)
        .send({ errorMessage: "게시글 제목의 형식이 일치하지 않습니다." });
    }
    if (typeof content !== "string") {
      return res
        .status(412)
        .send({ errorMessage: "게시글 내용의 형식이 일치하지 않습니다." });
    }

    try {
      const result = await Post.update({ title, content }, { where: { id } });
      if (result > 0) {
        res.send({ message: "게시글을 수정하였습니다." });
      }
    } catch (error) {
      if (error.original?.sqlMessage) {
        return res
          .status(500)
          .send({ errorMessage: error.original?.sqlMessage });
      }
      res.status(500).send({ errorMessage: error.message });
    }
  } catch (error) {
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    // 조기 리턴
    // post가 없을때
    const post = await Post.findAll({
      where: { id },
    });
    if (post.length <= 0) {
      return res
        .status(400)
        .send({ errorMessage: "게시글이 존재하지 않습니다." });
    }

    const result = await Post.destroy({
      where: { id },
    });

    if (result > 0) {
      res.send({ message: "게시글을 삭제하였습니다." });
    }
  } catch (error) {
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const getLikePosts = async (req, res) => {
  try {
    const { id: userId } = res.locals.user;

    // 좋아요가 있는 모든 게시글 조회
    // let likePosts = await Post.findAll({
    //   include: [Like],
    //   required: false,
    // });

    // 좋아요가 있는 자신으 게시글 조회
    // let likePosts = await Post.findAll({
    //   include: [
    //     {
    //       model: Like,
    //       require: false,
    //       where: { userId },
    //     },
    //   ],
    // });

    // 좋아요가 있는 자신으 게시글 조회(row query)
    const [data, metadata] = await sequelize.query(`
      SELECT p.*, u.nickname, COALESCE(lc.cnt, lc.cnt, 0) AS 'likes'
      FROM Posts p
      LEFT JOIN (
              SELECT p.id, COUNT(p.id) as cnt
              FROM Posts p 
              INNER JOIN Likes l ON p.id = l.postId 
              GROUP BY p.id
          ) AS lc 
          ON p.id = lc.id
      LEFT JOIN Users u
      ON p.userId = u.id
      WHERE p.userId = ${userId};
   `);

    res.send({ data });
  } catch (error) {
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const createAndDeleteLikePost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const { id: userId } = res.locals.user;

    // 조기 리턴
    // post가 없을때
    const post = await Post.findAll({
      where: { id: postId },
    });
    if (post.length <= 0) {
      return res
        .status(400)
        .send({ errorMessage: "게시글이 존재하지 않습니다." });
    }

    try {
      // like 테이블에 해당 게시글이 있으면(좋아요를 누른게시글) dislike
      const liked = await Like.findAll({
        where: { postId },
      });

      // 게시글에 이미 좋아요를 눌렀으면 좋아요 삭제
      // 게시글에 좋아요를 안 눌렀으면 좋아요 등록
      if (liked.length > 0) {
        await Like.destroy({ where: { postId, userId } });
        res.status(200).send({ message: "게시글의 좋아요를 츼소하였습니다." });
      } else {
        await Like.create({ userId, postId });
        res.status(201).send({ message: "게시글의 좋아요를 등록하였습니다." });
      }
    } catch (error) {
      if (error.original?.sqlMessage) {
        return res
          .status(500)
          .send({ errorMessage: error.original?.sqlMessage });
      }
      res.status(500).send({ errorMessage: error.message });
    }
  } catch (error) {
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

    res.send({ result });
  } catch (error) {
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
  createAndDeleteLikePost,
  deletePosts,
};
