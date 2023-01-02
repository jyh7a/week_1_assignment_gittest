const { sequelize, User, Post, Comment, Like } = require("../models");

const createPosts = async (req, res) => {
  try {
    // 등록하는 로직 
    const { userId, title, content } = req.body;

    // 조기 리턴  
    

    const post = await Post.create({ userId, title, content });
    console.log({post});
    res.status(201).send({post});

  } catch (error) {
    console.error(error)
    res.status(500).send({errorMessage:error})
  }
}

// const getPosts = async (req, res) => {
//   try {
    
//   } catch (error) {
//     console.error(error)
//     res.status(500).send({errorMessage:error})
//   }
// }

module.exports = { createPosts }