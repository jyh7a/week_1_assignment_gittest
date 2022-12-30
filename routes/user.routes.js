const express = require("express");

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  deleteUsers
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
// 테스트용
router.delete("/users", deleteUsers);
router.delete("/users/:id", deleteUser);

module.exports = router;