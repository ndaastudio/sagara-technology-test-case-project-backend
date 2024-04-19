const Joi = require('joi');

class Validation {
  static async loginUser(data) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required()
    });

    return schema.validate(data);
  }
}

module.exports = Validation;
