const bikeRouter = require('express').Router();
const { getAllBikes, postBike } = require('../controllers/bike.controllers');
const authentication = require('../helpers/verification.helper');

bikeRouter.get('/', getAllBikes);
bikeRouter.post('/', authentication, postBike);

module.exports = bikeRouter;
