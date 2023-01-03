const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

const { sequelize, User } = require("../models");

require("dotenv").config();

const login = async (req, res) => {
  try {
    const { nickname, password } = req.body;
    const user = await User.findOne({
      where: {
        [Op.and]: [{ nickname }, { password }],
      },
    });

    // NOTE: 인증 메세지는 자세히 설명하지 않는것을 원칙으로 한다: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#authentication-responses
    if (!user || password !== user.password) {
      return res.status(400).send({
        errorMessage: "이메일 또는 패스워드가 틀렸습니다.",
      });
    }

    res.cookie(
      "jwt",
      { token: jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY) },
      { maxAge: 1000 * 60 * 10 }
    );

    res.send({
      token: jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY),
    });
  } catch (error) {
    console.log(error);
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    // const users = await User.findAll({
    // 아래 중첩되지 않은 left join 과 중첩된 left join을 실행시켜 값을 비교해보세요!
    // post, comment, like 에 더미데이터 넣으시고 테스트 해야합니다.
    // dbeaver 이용해서 더미데이터 만들때 날짜를 입력 안 해서 오류 날수 있으니 날짜는
    // 0000-00-00 00:00:00 왼쪽과 같이 넣으셔도 됩니다.

    // 중첩되지 않은 left join
    // include: [Post, Comment, Like],
    // required: false,

    // 중첩된 left join
    // include: [
    //   {
    //     model: Post,
    //     required: false,
    //   }, // left join 하기위해선 false 주어야함
    //   {
    //     model: Post,
    //     include: Like,
    //     required: false,
    //   },
    // ],
    // });
    // console.log({ users });

    const [users, metadata] = await sequelize.query("SELECT * FROM Users;");
    console.log({ users });
    console.log({ metadata });

    res.send({ users });
  } catch (error) {
    console.log(error);
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { nickname, password, confirm_password } = req.body;

    // 조기 리턴
    // 닉네임은 최소 3자 이상, 알파벳 대소문자(a~z, A~Z), 숫자(0~9)로 구성하기
    const regexNickname = /^[A-Za-z0-9]{3,20}$/;
    const regexNicknameResult = regexNickname.test(nickname);
    if (regexNicknameResult === false) {
      return res.status(400).send({
        message:
          "닉네임은 최소 3자 이상 20자 이하, 알파벳 대소문자(a~z, A~Z), 숫자(0~9)",
      });
    }

    // 비밀번호 길이(4자이상 20이하)
    const regexPasswordLength = /^[A-Za-z0-9]{4,20}$/;
    const regexPasswordLengthResult = regexPasswordLength.test(password);
    if (regexPasswordLengthResult === false) {
      return res.status(400).send({ message: "비밀번호 길이(4자이상 20이하)" });
    }

    // 비밀번호 닉네임과 같은 값 없어야 함
    const regexUnequalNickname = new RegExp(`^((?!${nickname}).)*$`, "g");
    // const regexUnequalNickname = /^((?!${nickname}).)*$/;
    const regexUnequalNicknameResult = regexUnequalNickname.test(password);
    if (regexUnequalNicknameResult === false) {
      return res
        .status(400)
        .send({ message: "비밀번호 닉네임과 같은 값 없어야 함" });
    }

    // 비밀번호 === 비밀번호 확인
    if (password !== confirm_password) {
      return res
        .status(400)
        .send({ message: "password, confirm_password 불일치" });
    }

    try {
      const user = await User.create({ nickname, password });
      console.log({ user });
      res.status(201).send({ user });

      // const [userId, metadata] = await sequelize.query(`
      //   INSERT INTO Users
      //   (nickname, password)
      //   values("${nickname}", "${password}")
      // `);
      // console.log({ userId });
      // console.log({ metadata });
      // res.status(201).send({ userId });
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

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nickname, password } = req.body;

    // const result = await User.update({ nickname, password }, { where: { id } });
    // console.log({ result });

    const [result, metadata] = await sequelize.query(`
      UPDATE Users SET
      nickname="${nickname}",password="${password}"
      WHERE id=${id};
    `);
    console.log({ result });
    console.log({ metadata });

    res.send({ result });
  } catch (error) {
    console.log(error);
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // const result = await User.destroy({
    //   where: { id },
    // });
    // console.log({ result });

    const [result, metadata] = await sequelize.query(`
      DELETE FROM Users WHERE id = ${id}; 
    `);
    console.log({ result });
    console.log({ metadata });

    res.send({ result });
  } catch (error) {
    console.log(error);
    if (error.original?.sqlMessage) {
      return res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
    res.status(500).send({ errorMessage: error.message });
  }
};

// 테스트용
const deleteUsers = async (req, res) => {
  try {
    // const result = await User.destroy({
    //   where: {},
    // });
    // console.log({ result });

    const [result, metadata] = await sequelize.query(`
      DELETE FROM Users;
    `);
    console.log({ result });
    console.log({ metadata });

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
  login,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  deleteUsers,
};
