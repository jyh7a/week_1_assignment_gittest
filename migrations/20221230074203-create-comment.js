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
