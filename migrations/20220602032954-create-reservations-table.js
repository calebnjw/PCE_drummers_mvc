'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'reservations',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        drummer_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'drummers',
            key: 'id',
          },
        },
        name: {
          type: Sequelize.STRING
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('drummers');
  }
};