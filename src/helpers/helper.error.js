class ErrorResponse {
  static NotFound = (res, msg) => {
    return res.status(404).json({
      code: 404,
      status: "error",
      message: msg,
    });
  };

  static InternalServer = (res, msg) => {
    return res.status(500).json({
      code: 500,
      status: "error",
      message: msg,
    });
  };

  static BadRequest = (res, msg) => {
    return res.status(400).json({
      code: 400,
      status: "error",
      message: msg,
    });
  };

  static Unauthorized = (res, msg) => {
    return res.status(401).json({
      code: 401,
      status: "error",
      message: msg,
    });
  };

  static Forbidden = (res, msg) => {
    return res.status(403).json({
      code: 403,
      status: "error",
      message: msg,
    });
  };
}

module.exports = ErrorResponse;
