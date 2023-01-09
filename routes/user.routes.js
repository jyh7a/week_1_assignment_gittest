const express = require("express");
const {auth_middleware} = require('../middlewares/auth-middleware.js');

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  deleteUsers
} =
  require("../controllers/user.controller");

const router = express.Router();

router.get("/users", auth_middleware, getUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
// 테스트용
router.delete("/users", deleteUsers);
router.delete("/users/:id", deleteUser);

module.exports = router;