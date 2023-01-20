const { sequelize, User, Post, Comment, Like } = require("../models");
const user = require("../models/user");
const { post } = require("../routes/post.routes");

// 게시글 생성
const createPosts = async (req, res) => {
  try {
    // 등록하는 로직
    const { title, content } = req.body;
    const { id: userId } = res.locals.user;

    // 조리턴
    // 유저가 없을때는 '유저가 없습니다 라고 전달'

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

// 모든 게시글 조회
const getPosts = async (req, res) => {
  try {
    // const posts = await Post.findAll({
    //   include: [Like],
    //   required: false,
    // });

    const [result, metadata] = await sequelize.query(`
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
      ON p.userId = u.id;
     `);

    console.log({ result, metadata });

    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(400).send({ errorMessage: "게시글 조회에 실패하였습니다." });
  }
};

// 게시글 상세 조회
const detailPost = async (req, res) => {
  try {
    // 1. id값을 parameter로 받는다
    const { id } = req.params;
    // 2. 1번에서 받은 id값과 동일한 id값을 가진 게시글을 찾는다 (findOne)
    const existPost = await Post.findOne({ where: { id } });

    if (!existPost) {
      res.status(400).send({ message: "없는 게시글입니다." });
      return;
    }
    // 3. 그 게시글이 존재하면 json으로 보내준다
    return res.status(200).send({ data: existPost });
  } catch (error) {
    console.error(error);
    res.status(400).send({ errorMessage: error.message });
  }
};

// 게시글 수정
const updatePosts = async (req, res) => {
  // 1. postId, userId를 가지고 온다.
  // 2. postId, userId가 일치하는 게시글을 찾는다.
  // 3. 존재하지 않으면 에러를 보낸다.
  // 4. 존재할 경우 게시글을 수정한다.
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const { id: userId } = res.locals.user;
    const existPost = await Post.findOne({ where: { id, userId } });
    if (!existPost) {
      res.status(400).send({ message: "없는 게시글입니다." });
      return;
    }
    const updatePosts = await Post.update(
      { title, content },
      { where: { id } }
    );
    console.log(updatePosts);
    res.status(200).send({ message: "게시글을 수정하였습니다." });
  } catch (error) {
    console.error(error);
    res.status(400).send({ errorMessage: error.message });
  }
};

// 게시글 삭제
const deletePosts = async (req, res) => {
  try {
    // 1. id 값을 파라미터에서 가져온다.
    const { id } = req.params;
    // 2. userid를 받아와서 자신이 쓴 포스트만 삭제할 수 있도록 찾는다
    const { id: userId } = res.locals.user;
    const existPost = await Post.findOne({ where: { id, userId } });

    if (!existPost) {
      return res.status(400).send({ message: "없는 게시글입니다." });
    }
    await Post.destroy({ where: { id, userId } });
    return res.status(200).send({ message: "삭제가 완료되었습니다." });
  } catch (error) {
    console.error(error);
    res.status(400).send({ errorMessage: error.message });
  }
};

// 게시글 상세 조회 함수도 export 시켜야함
module.exports = {
  createPosts,
  getPosts,
  detailPost,
  updatePosts,
  deletePosts,
};
