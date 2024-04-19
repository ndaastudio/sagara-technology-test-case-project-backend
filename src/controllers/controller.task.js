const TaskModel = require('../models/model.task');
const task = new TaskModel();
const ErrorResponse = require('../helpers/helper.error');
const SuccessResponse = require('../helpers/helper.success');
const Validation = require('../helpers/helper.validation');

class TaskController {
  static async create(req, res) {
    try {
      const data = req.body;
      const { error } = Validation.task(data);
      if (error) {
        return ErrorResponse.BadRequest(res, error.details[0].message);
      }

      const result = await task.create(req, data);
      return SuccessResponse.Created(res, 'Task created successfully', result);
    } catch (error) {
      return ErrorResponse.InternalServer(res, error.message);
    }
  }

  static async getAll(req, res) {
    try {
      const results = await task.getAll(req);
      return SuccessResponse.DataFound(res, 'Tasks retrieved successfully', results);
    } catch (error) {
      return ErrorResponse.NotFound(res, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const taskId = req.params.id;
      const result = await task.getById(req, taskId);
      return SuccessResponse.DataFound(res, 'Task retrieved successfully', result);
    } catch (error) {
      return ErrorResponse.NotFound(res, error.message);
    }
  }

  static async updateById(req, res) {
    try {
      const taskId = req.params.id;
      const data = req.body;
      const { error } = Validation.task(data);
      if (error) {
        return ErrorResponse.BadRequest(res, error.details[0].message);
      }

      await task.updateById(req, taskId, data);
      return SuccessResponse.OK(res, 'Task updated successfully');
    } catch (error) {
      return ErrorResponse.NotFound(res, error.message);
    }
  }

  static async deleteById(req, res) {
    try {
      const taskId = req.params.id;
      await task.deleteById(req, taskId);
      return SuccessResponse.OK(res, 'Task deleted successfully');
    } catch (error) {
      return ErrorResponse.NotFound(res, error.message);
    }
  }
}

module.exports = TaskController;
