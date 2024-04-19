const express = require('express');
const UserRouter = express.Router();
const UserController = require('../controllers/controller.user');

UserRouter.post('/users/login', UserController.login);

module.exports = UserRouter;
