const express = require('express');
const router = express.Router();

class ReservationRouter {
  constructor(controller) {
    this.controller = controller
  }

  router() {
    // insert routes that call functions in the controller
    // have to .bind(this.controller) at the end of each route
    router.get('/', this.controller.showAllReservations.bind(this.controller));
    router.get('/:id', this.controller.getReservations.bind(this.controller));
    router.get('/:id/ajax', this.controller.getReservationsAjax.bind(this.controller));
    router.post('/:id', this.controller.createReservation.bind(this.controller));

    return router;
  };
};

module.exports = ReservationRouter;