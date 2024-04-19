const express = require('express');
const TaskRouter = express.Router();
const TaskController = require('../controllers/controller.task');
const authMiddleware = require('../middlewares/middleware.auth');

TaskRouter.post('/tasks', authMiddleware, TaskController.create);
TaskRouter.get('/tasks', authMiddleware, TaskController.getAll);
TaskRouter.get('/tasks/:id', authMiddleware, TaskController.getById);
TaskRouter.put('/tasks/:id', authMiddleware, TaskController.updateById);
TaskRouter.delete('/tasks/:id', authMiddleware, TaskController.deleteById);

module.exports = TaskRouter;
