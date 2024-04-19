class SuccessResponse {
  static OK = (res, msg) => {
    return res.status(200).json({
      code: 200,
      status: "success",
      message: msg,
    });
  };

  static DataFound = (res, msg, data) => {
    return res.status(200).json({
      code: 200,
      status: "success",
      message: msg,
      data: data,
    });
  };

  static Created = (res, msg, data) => {
    return res.status(201).json({
      code: 201,
      status: "success",
      message: msg,
      data: data,
    });
  };
}

module.exports = SuccessResponse;
