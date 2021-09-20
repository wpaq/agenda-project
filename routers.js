const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// home controllers
route.get('/', homeController.index);

// login routers
route.get('/login/index', loginController.index);

module.exports = route;
