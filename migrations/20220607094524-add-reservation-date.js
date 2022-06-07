'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'reservations',
      'reservation_date',
      {
        allowNull: false,
        type: Sequelize.DATE,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('reservations', 'reservation_date');
  }
};
