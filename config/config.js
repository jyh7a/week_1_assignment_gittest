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
