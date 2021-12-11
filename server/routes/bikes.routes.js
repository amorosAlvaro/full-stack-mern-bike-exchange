const bikeRouter = require('express').Router();
const {
  getAllBikes,
  postBike,
  addBikeToFavorites,
  deleteBikeFromFavorites,
  deleteBike,
  getFavoriteBikes,
  getOwnedBikes,
} = require('../controllers/bike.controllers');
const authentication = require('../helpers/verification.helper');
const upload = require('../helpers/multer.helper');

bikeRouter.get('/', getAllBikes);
bikeRouter.post('/owned', authentication, upload.single('image'), postBike);
bikeRouter.delete('/owned', authentication, deleteBike);
bikeRouter.get('/owned', authentication, getOwnedBikes);
bikeRouter.post('/favorite', authentication, addBikeToFavorites);
bikeRouter.delete('/favorite', authentication, deleteBikeFromFavorites);
bikeRouter.get('/favorite', authentication, getFavoriteBikes);

module.exports = bikeRouter;
