const jwt = require('jsonwebtoken');

function auth_middleware(req, res, next) {
  console.log('여기는 검증 미들웨어 입다');
  console.log(req.cookies.jwt);

  // 1. 쿠키가 있는지 => 없으면 로그인후 사용 가능한 api 메세지 주면서 리턴
  // 2. 쿠키에 jwt 있는지 => 없으면 로그인후 사용 가능한 api 메세지 주면서 리턴

  // 3. jwt verify 함수를 이용해서 쿠키에서 받아온 토큰값 인증 
  // 4. 인증이 실패시 => error 
  // 5. 인증이 성공 할시 res.locals.user = user 정보를 담아서 보내자
  next();
}

module.exports = { auth_middleware };