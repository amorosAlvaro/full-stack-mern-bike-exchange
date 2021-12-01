const bikeRouter = require('express').Router();
const {
  getAllBikes,
  postBike,
  addBikeToFavorites,
} = require('../controllers/bike.controllers');
const authentication = require('../helpers/verification.helper');

bikeRouter.get('/', getAllBikes);
bikeRouter.post('/', authentication, postBike);
bikeRouter.put('/', authentication, addBikeToFavorites);

module.exports = bikeRouter;
