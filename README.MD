# Linklist

- 개인과제 - https://teamsparta.notion.site/Node-js-b177edcc731147b38ba49594849627e9
- api 명세 - https://teamsparta.notion.site/4cac92913a394da5978127a7209ca773?v=bc21b59671544d29b76d67941bf161fd
- ERD - https://drawsql.app/teams/sparta-12/diagrams/1
- 후발대 노션 - https://www.notion.so/teamsparta/_1-12-26-30-1cd4866ab2e34ea194a59f09da2e166e

<br>

# 유용한 도구 
- brave 브라우저 - 모든지역 검색 가능 
- ChatGPT - 대화형 검색 엔진 - https://chat.openai.com/
- you.com - 대화형 검색 엔진 - https://you.com/

<br>

# 기능 체크 리스트

<input type="checkbox" checked> 1. 회원가입 API <br>
<input type="checkbox" checked> 2. 로그인 API <br>
<input type="checkbox" checked> 3. 로그인 검사 미들웨어 <br>
<input type="checkbox" > 4. 댓글 목록 조회 API <br>
<input type="checkbox" > 5. 댓글 작성 API <br>
<input type="checkbox" > 6. 댓글 수정 API <br>
<input type="checkbox" > 7. 댓글 삭제 API <br>
<input type="checkbox" > 8. 게시글 좋아요 API <br>
<input type="checkbox" > 9. 좋아요 게시글 조회 API <br>

<br>

# checklist

## API

### 일반

<input type="checkbox" checked> 회원가입 - signup - All  
<input type="checkbox" checked> 로그인 - login - All

### 게시글

<input type="checkbox" checked> 게시글 작성 - posts - User  
<input type="checkbox" checked> 게시글 목록 조회 - posts - All  
<input type="checkbox" checked> 게시글 상세 조회 - posts/:postId - All<br>
<input type="checkbox" checked> 게시글 수정 - posts/:postId - User<br>
<input type="checkbox" checked> 게시글 삭제 - posts/:postId - User

### 댓글

<input type="checkbox" > 댓글 생성 - comments/:postId - User<br>
<input type="checkbox" > 댓글 목록 조회 - comments/:postId - All<br>
<input type="checkbox" > 댓글 수정 - comments/:postId - User<br>
<input type="checkbox" > 댓글 삭제 - comments/:postId - User<br>

## 좋아요

<input type="checkbox" > 좋아요 게시글 조회 - posts/like - User  
<input type="checkbox" > 게시글 좋아요 누루기 - posts/:postId/like - User

<br>

# Reference

- status code(401,403) - https://sanghaklee.tistory.com/61
- ststus code(400, 412) - https://stackoverflow.com/questions/10730852/http-status-code-400-vs-412?noredirect=1&lq=1
- status code(update success) - https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/#200---299

<br>

# 이제 이 레포는 제껍니다.

## Git clone

```
git clone https://github.com/juwalove7/new_test
```

<br/>

## Go to new_test folder

```
cd new_test
```

<br/>

## Move all file to outside

```
mv * .* ../
```

<br/>

## Move command out

```
cd ../
```

<br/>

## Delete new_test folder

```
rm -r new_test
```

<br/>

## Check git brnach

```
git remote -v
```

<br/>

## Check all brnach

```
git branch -a
```

<br/>

## Exit screen

```
q
```

<br/>

## Download the branch you need

```
git checkout -b develop remotes/origin/develop
git checkout -b feature/models remotes/origin/feature/models
```

## check branch

```
git branch
```

<br/>

## Exit screen

```
q
```

<br/>

## Check git brnach

```
git remote -v
```

<br/>

## delete remote

```
git remote remove origin
```

<br/>

## Check git brnach

```
git remote -v
```

<br/>

## Make your repository in gitHub

```
깃허브에서 rpository 만드세요~
```

<br/>

## add remote

```
git remote add origin [자신의 깃 repository 주소]
git remote add origin https://github.com/jyh7a/week_1_assignment_gittest.git
```

<br/>

## check git brnach

```
  git remote -v
```

<br/>

## git push branches

```
  git switch main
  git status
  git push --set-upstream origin main
  git brnach
  git switch develop
  git status
  git push --set-upstream origin develop
  git switch feature/models
  git status
  git push --set-upstream origin feature/models
```

<br/>

## Check all branch

```
git branch -a
```

<br/>

## Screen out

```
q
```

<br/>

## check your git repository

```
  깃 레포에서 main, develop, feature/models 브랜치가 잘 생성 되었나 확인하세요!
  commit 도 확인해보세요!
  이전에 했던 commit이 보존되어 있습니다!
```

<br/>

# 본격적으로 코딩 시작!

## Make .env file and write

```
touch .env
```

<br/>

## .env (aws 셋팅은 여러분이 설정한대로)

```
PORT=3000
MYSQL_AWS_USERNAME=
MYSQL_AWS_PASSWORD=
MYSQL_AWS_DATABASE=
MYSQL_AWS_HOST=
```

<br/>

## Install all modules

```
npm i
```

<br/>

## Test sequelize command

```
sequelize
```

<br/>

## Check global modules

```
npm ls -g
```

<br/>

## Uninstall sequelize-cli

```
npm r sequelize-cli -g
```

<br/>

## Check global modules

```
npm ls -g
```

<br/>

## Test sequelize command

```
sequelize
```

<br/>

## install sequelize-cli global

```
npm i sequelize-cli -g
```

<br/>

## Test sequelize command

```
sequelize
```

<br/>

## Init sequelize

```
sequelize init
```

<br>

## Modify config.json to config.js

`config.js`

```
require("dotenv").config();
const env = process.env;

const development = {
  username: env.MYSQL_AWS_USERNAME,
  password: env.MYSQL_AWS_PASSWORD,
  database: env.MYSQL_AWS_DATABASE,
  host: env.MYSQL_AWS_HOST,
  dialect: "mysql",
};

const test = {
  username: "root",
  password: null,
  database: "database_test",
  host: "127.0.0.1",
  dialect: "mysql",
};

const production = {
  username: "root",
  password: null,
  database: "database_production",
  host: "127.0.0.1",
  dialect: "mysql",
};

module.exports = { development, test, production };

```

<br/>

## Modify models/index.js

```
const config = require(__dirname + '/../config/config.js')[env];
```

<br>

## What is migration?

- https://life-with-coding.tistory.com/68

<br/>

## Sequelize db create

```
sequelize db:create
```

## Check created db

```
생성된 DB를 확인하세요
```

## Creating the models and migrations

```
sequelize model:generate --name User --attributes nickname:string,password:string
sequelize model:generate --name Post --attributes userId:BIGINT,title:string,content:string
sequelize model:generate --name Comment --attributes userId:BIGINT,postId:BIGINT,content:TEXT
sequelize model:generate --name Like --attributes userId:BIGINT,postId:BIGINT,commentId:BIGINT
```

<br/>

## modify models

`migrations/날짜-create-user.js`

```
"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      nickname: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(50),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};

```

<br>

`migrations/날짜-create-post.js`

```
"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      userId: {
        allowNull: false,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      content: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  },
};

```

`migrations/날짜-create-comment.js`

```
"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      userId: {
        allowNull: false,
        references: { model: "Users", key: "id" },
        type: Sequelize.BIGINT.UNSIGNED,
      },
      postId: {
        allowNull: false,
        references: { model: "Posts", key: "id" },
        type: Sequelize.BIGINT.UNSIGNED,
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Comments");
  },
};

```

<br>

`migrations/날짜-create-like.js`

```
"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Likes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      userId: {
        allowNull: false,
        references: { model: "Users", key: "id" },
        type: Sequelize.BIGINT.UNSIGNED,
      },
      postId: {
        references: { model: "Posts", key: "id" },
        type: Sequelize.BIGINT.UNSIGNED,
      },
      commentId: {
        references: { model: "Comments", key: "id" },
        type: Sequelize.BIGINT.UNSIGNED,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Likes");
  },
};
```

<br/>

`20221230074551-alter-reference-post.js`

```
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Posts", "userId", {
      allowNull: false,
      references: { model: "Users", key: "id" },
      type: Sequelize.BIGINT.UNSIGNED,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Posts", "userId", {
      allowNull: false,
      type: Sequelize.BIGINT.UNSIGNED,
    });
  },
};

```

<br>

## Sequelize migrate

```
sequelize db:migrate
```

<br/>

## Check created tables

```
생성된 table 들을 확인하세요
테이블들관의 관계 ERD도 확인하세요!
```

<br/>

## Modify models

`modles/users.js`

```
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Post);
      models.User.hasMany(models.Comment);
      models.User.hasMany(models.Like);
    }
  }
  User.init(
    {
      nickname: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};


```

<br>

`modles/posts.js`

```
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.hasMany(models.Like);
      models.Post.belongsTo(models.User, {
        foreignKey: "id",
      });
    }
  }
  Post.init(
    {
      userId: DataTypes.BIGINT,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};

```

<br>

`modles/comment.js`

```
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comment.belongsTo(models.User, {
        foreignKey: "id",
      });
      models.Comment.belongsTo(models.Post, {
        foreignKey: "id",
      });
    }
  }
  Comment.init({
    userId: DataTypes.BIGINT,
    postId: DataTypes.BIGINT,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
```

<br>

`modles/like.js`

```
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Like.belongsTo(models.User, {
        foreignKey: "id",
      });
      models.Like.belongsTo(models.Post, {
        foreignKey: "id",
      });
      models.Like.belongsTo(models.Comment, {
        foreignKey: "id",
      });
    }
  }
  Like.init({
    userId: DataTypes.BIGINT,
    postId: DataTypes.BIGINT,
    commentId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
```

<br>

## Make routes, controllers folder

```
md routes controllers
```

<br>

## Make routes/user.routes.js, controllers/user.controller.js file

```
touch routes/user.routes.js controllers/user.controller.js
```

<br>

## write user.router.js

`uer.router.js`

```
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
```

<br>

## write controllers/user.controller.js

```
const { sequelize, User, Post, Comment, Like } = require("../models");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
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
    });
    console.log({ users });

    // const [users, metadata] = await sequelize.query("SELECT * FROM Users;");
    // console.log({ users });
    // console.log({ metadata });

    res.send({ users });
  } catch (error) {
    console.error(error);
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

    // const user = await User.create({ nickname, password });
    // console.log({ user });

    try {
      const [userId, metadata] = await sequelize.query(`
        INSERT INTO Users
        (nickname, password)
        values("${nickname}", "${password}")
      `);
      console.log({ userId });
      console.log({ metadata });
      res.status(201).send({ userId });
    } catch (error) {
      console.log(error);
      res.status(500).send({ errorMessage: error.original?.sqlMessage });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ errorMessage: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = res.locals.user;
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
    console.error(error);
    res.status(500).send({ errorMessage: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = res.locals.user;

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
    console.error(error);
    res.status(500).send({ errorMessage: error.message });
  }
};

// 테스트용
const deleteUsers = async (req, res) => {
  try {
    const { id } = res.locals.user;

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
    console.error(error);
    res.status(500).send({ errorMessage: error.message });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser, deleteUsers };

```

<br>

## Modify app.js

`app.js`

```
const express = require("express");

const userRouter = require("./routes/user.routes.js");

const app = express();
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", [userRouter]);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

```

<br>

## Test post users and get users

```
API 테스트 도구를 통해서 user 생성 및 user get 테스트
```

<br>

# Reference

- sequelize
  - https://kyounghwan01.github.io/blog/etc/sequelize/sequelize-join/#inner-outer-join%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A1%E1%86%AB
  - https://inpa.tistory.com/entry/ORM-%F0%9F%93%9A-sequelize-left-join-%ED%95%98%EB%8A%94%EB%B2%95
