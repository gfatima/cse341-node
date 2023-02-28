const routes = require('express').Router();


const appController = require('../controllers/index');

routes.get('/', appController);


module.exports = routes;