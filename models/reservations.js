const { DateTime } = require("luxon");

const initReservationModel = (sequelize, DataTypes) => {
  return sequelize.define(
    'reservation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      drummerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drummers',
          key: 'id',
        },
      },
      name: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      reservationDate: {
        allowNull: false,
        type: DataTypes.DATE,
        get() {
          // this will get the date from reservationDate, format it using luxon, then output it
          return DateTime.fromJSDate(this.dataValues.reservationDate).toLocaleString(DateTime.DATE_MED);
        }
      },
    },
    {
      underscored: true,
    },
  );
}

module.exports = initReservationModel;