'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'drummers',
      'equipment',
      {
        type: Sequelize.STRING,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('drummers', 'equipment');
  }
};
