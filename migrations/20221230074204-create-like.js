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
