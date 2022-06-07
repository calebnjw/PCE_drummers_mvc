const BaseController = require('./baseController');
const { faker } = require('@faker-js/faker');
const { DateTime } = require("luxon");

class ReservationController extends BaseController {
  constructor(model) {
    super(model);
  };

  /**
   * shows all reservations
   */
  async showAllReservations(request, response) {
    console.log('Show All Reservations');

    try {
      const reservations = await this.model.findAll();

      response.render('reservations', { reservations });
    } catch (error) {
      console.log(error);
    };
  };

  async getReservations(request, response) {
    console.log('Get Reservations');

    const { id } = request.params;

    try {
      const reservations = await this.model.findAll({ where: { drummerId: id } });

      response.render('reservations-single', { reservations });
    } catch (error) {
      console.log(error);
    };
  };

  async getReservationsAjax(request, response) {
    console.log('Get Reservations AJAX');

    const { id } = request.params;

    try {
      const reservations = await this.model.findAll({ where: { drummerId: id } });
      console.log(reservations);
      response.send(reservations);
    } catch (error) {
      console.log(error);
    };
  };

  /**
   * creates new reservation data from reservation page
   */
  async createReservation(request, response) {
    console.log('Creating Reservation');

    const { id } = request.params;
    const { name, reservationDate } = request.body;
    const formattedDate = DateTime.fromISO(reservationDate).toJSDate();

    try {
      await this.model.create({
        drummerId: id,
        name,
        reservationDate: formattedDate,
      });

      response.redirect('/reservations');
    } catch (error) {
      console.log(error);
    };
  };
};

module.exports = ReservationController;
