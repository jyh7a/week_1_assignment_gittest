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