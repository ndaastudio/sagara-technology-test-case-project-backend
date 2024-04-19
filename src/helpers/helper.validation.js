const Joi = require('joi');

class Validation {
  static async login(data) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required()
    });

    return schema.validate(data);
  }

  static async task(data) {
    const schema = Joi.object({
      title: Joi.string().min(5).required(),
      content: Joi.string().min(8).required(),
      status: Joi.string().required()
    });

    return schema.validate(data);
  }
}

module.exports = Validation;
