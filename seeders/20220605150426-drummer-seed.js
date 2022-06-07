'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const drummersList = [
      {
        name: 'Sammy',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Tommy',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jenny',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Sally',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Polly',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert(
      'drummers',
      drummersList,
      { returning: true }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drummers', null, {});

  }
};
