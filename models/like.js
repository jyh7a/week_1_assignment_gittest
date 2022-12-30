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