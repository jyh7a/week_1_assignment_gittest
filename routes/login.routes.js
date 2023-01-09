const express = require('express');
const userController = require('../controllers/user.controller.js');
const router = express.Router();

router.post('/login', userController.login);

module.exports = router;