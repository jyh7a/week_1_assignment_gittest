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
