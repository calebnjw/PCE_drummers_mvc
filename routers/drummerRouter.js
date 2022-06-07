const express = require('express');
const router = express.Router();

class DrummerRouter {
  constructor(controller) {
    this.controller = controller
  }

  router() {
    // insert routes that call functions in the controller
    // have to .bind(this.controller) at the end of each route
    router.get('/', this.controller.showAllDrummers.bind(this.controller));
    router.get('/:id', this.controller.showOneDrummer.bind(this.controller));

    return router;
  }
}

module.exports = DrummerRouter;