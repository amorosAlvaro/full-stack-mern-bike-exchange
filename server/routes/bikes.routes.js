const bikeRouter = require('express').Router();
const {
  getAllBikes,
  postBike,
  addBikeToFavorites,
  deleteBikeFromFavorites,
  deleteBike,
} = require('../controllers/bike.controllers');
const authentication = require('../helpers/verification.helper');

bikeRouter.get('/', getAllBikes);
bikeRouter.post('/', authentication, postBike);
bikeRouter.delete('/', authentication, deleteBike);
bikeRouter.put('/favorites', authentication, addBikeToFavorites);
bikeRouter.delete('/favorites', authentication, deleteBikeFromFavorites);

module.exports = bikeRouter;
