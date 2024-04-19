const UserModel = require('../models/model.user');
const user = new UserModel();
const ErrorResponse = require('../helpers/helper.error');
const SuccessResponse = require('../helpers/helper.success');
const Validation = require('../helpers/helper.validation');
const { generateToken } = require('../helpers/helper.jwt');

class UserController {
  static async login(req, res) {
    try {
      const data = req.body;
      const { error } = await Validation.login(data);
      if (error) {
        return ErrorResponse.BadRequest(res, error.details[0].message);
      }
      const result = await user.login(data);
      const token = generateToken({ id: result.id });
      result.token = token;
      return SuccessResponse.DataFound(res, 'Login success', result);
    } catch (error) {
      return ErrorResponse.Unauthorized(res, error.message);
    }
  }
}

module.exports = UserController;
