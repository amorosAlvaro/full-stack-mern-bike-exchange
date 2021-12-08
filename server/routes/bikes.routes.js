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
bikeRouter.put('/favorites', authentication, addBikeToFavorites);
bikeRouter.delete('/favorites', authentication, deleteBikeFromFavorites);
bikeRouter.get('/favorites', authentication, getFavoriteBikes);

module.exports = bikeRouter;
