class BaseController {
  constructor(model) {
    this.model = model;
  };

  // helper functions

  // functions that render ejs pages / send responses
  async getNameFromId(value) {
    try {
      const { name } = await this.model.findOne({ where: { id: value } });
      return name;
    } catch (error) {
      console.log(error);
    };
  };

  async getIdFromName(value) {
    try {
      const { id } = await this.model.findOne({ where: { name: value } })
      return id;
    } catch (error) {
      console.log(error);
    };
  };
};

module.exports = BaseController;