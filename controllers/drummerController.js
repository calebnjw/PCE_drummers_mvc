const BaseController = require('./baseController');
const { faker } = require('@faker-js/faker');
const { DateTime } = require("luxon");

class DrummerController extends BaseController {
  constructor(model) {
    super(model);
  };

  async newDrummer(request, response) {
    try {
      const newName = faker.name.findName();

      await this.model.create({ name: newName }, { returning: true });
    } catch (error) {
      console.log(error);
    }
  };

  async showAllDrummers(request, response) {
    console.log('Show All Drummers');
    try {
      const drummers = await this.model.findAll();

      response.render('drummers', { drummers });
    } catch (error) {
      console.log(error);
    }
  };

  async showOneDrummer(request, response) {
    console.log('Show One Drummer');
    const { id } = request.params;
    try {
      const drummer = await this.model.findOne({ where: { id } });

      response.render('drummers-single', { drummer });
    } catch (error) {
      console.log(error);
    }
  };
};

module.exports = DrummerController;