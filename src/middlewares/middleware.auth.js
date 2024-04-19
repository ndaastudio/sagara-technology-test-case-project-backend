const ErrorResponse = require('../helpers/helper.error');
const { verifyToken } = require('../helpers/helper.jwt');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return ErrorResponse.Unauthorized(res, 'Unauthorized');
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return ErrorResponse.Unauthorized(res, 'Unauthorized');
  }
};

module.exports = authMiddleware;
