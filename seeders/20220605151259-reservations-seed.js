'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const reservationsList = [
      {
        drummer_id: '1',
        name: faker.name.findName(),
        created_at: new Date(),
        updated_at: new Date(),
        reservation_date: faker.date.future(5),
      },
      {
        drummer_id: '5',
        name: faker.name.findName(),
        created_at: new Date(),
        updated_at: new Date(),
        reservation_date: faker.date.future(5),
      },
      {
        drummer_id: '2',
        name: faker.name.findName(),
        created_at: new Date(),
        updated_at: new Date(),
        reservation_date: faker.date.future(5),
      },
      {
        drummer_id: '3',
        name: faker.name.findName(),
        created_at: new Date(),
        updated_at: new Date(),
        reservation_date: faker.date.future(5),
      },
      {
        drummer_id: '1',
        name: faker.name.findName(),
        created_at: new Date(),
        updated_at: new Date(),
        reservation_date: faker.date.future(5),
      },
    ];

    await queryInterface.bulkInsert(
      'reservations',
      reservationsList,
      { returning: true }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reservations', null, {});

  }
};
