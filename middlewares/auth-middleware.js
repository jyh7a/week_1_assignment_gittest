const jwt = require('jsonwebtoken');

function auth_middleware(req, res, next) {
  console.log('여기는 검증 미들웨어 입다');
  console.log(req.cookies.jwt);

  next();
}

module.exports = { auth_middleware };