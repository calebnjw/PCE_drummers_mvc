'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'drummers',
      'price',
      {
        type: Sequelize.INTEGER,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('drummers', 'price');
  }
};
