'use strict';
const sequelizePackage = require('sequelize');
const allConfig = require('../config/config.js')

const initDrummerModel = require('./drummers.js');
const initReservationModel = require('./reservations.js');

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Drummer = initDrummerModel(sequelize, Sequelize.DataTypes)
db.Reservation = initReservationModel(sequelize, Sequelize.DataTypes)

// creating one to many relationship:
db.Reservation.belongsTo(db.Drummer);
db.Drummer.hasMany(db.Reservation);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;