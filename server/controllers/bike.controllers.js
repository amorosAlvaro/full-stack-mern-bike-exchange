const Bike = require('../models/bike.model');

// TODO: FIX THAT USER CAN ADD ONLY ONE TIME TO FAVORITES

async function getAllBikes({ query }, res, next) {
  try {
    const bikes = await Bike.find(query);
    res.json(bikes);
  } catch (error) {
    next(error);
  }
}

// Only need userID from token, get as method
async function getFavoriteBikes(req, res, next) {
  const userId = req.user._id;
  try {
    const bikes = await Bike.find();
    const bikesFiltered = [];
    bikes.forEach((item, index) => {
      item.favorites.map((favorite) => {
        if (userId === favorite.toString()) {
          bikesFiltered.push(bikes[index]);
        }
      });
    });
    console.log(bikesFiltered);
    res.json(bikesFiltered);
  } catch (error) {
    next(error);
  }
}

// Only need userID from token, get as method
async function getOwnedBikes(req, res, next) {
  const userId = req.user._id;
  try {
    const bikes = await Bike.find();
    const bikesFiltered = [];
    bikes.forEach((item, index) => {
      if (item.owner.toString() === userId) {
        bikesFiltered.push(bikes[index]);
      }
    });
    res.json(bikesFiltered);
  } catch (error) {
    next(error);
  }
}

async function deleteBikeFromFavorites(req, res, next) {
  const bikeId = req.body;
  const userId = req.user._id;
  console.log(userId);
  try {
    const bike = await Bike.findById(bikeId);
    const favoriteFiltered = bike.favorites
      .map((favorite) => favorite.toString())
      .filter((item) => item !== userId);
    bike.favorites = favoriteFiltered;
    bike.save();
    res.json(bike);
  } catch (error) {
    next(error);
  }
}

// Gets bike info from user, ownerID from token
async function postBike(req, res, next) {
  try {
    const bike = req.body;
    bike.owner = req.user._id;
    const newBike = Bike.create(bike);
    res.status(201).send(newBike);
  } catch (error) {
    next(error);
  }
}

function deleteBike(req, res, next) {
  const tokenUserId = req.user._id;
  const bikeOwnerId = req.body.owner;
  console.log(tokenUserId);
  console.log(bikeOwnerId);
  if (tokenUserId === bikeOwnerId) {
    Bike.findByIdAndDelete(req.body._id)
      .then((result) => {
        console.log(result);
        console.log(req.body._id);
        if (result) {
          res.status(202).json({ deletedId: req.params._id });
        } else {
          res.status(404).json({ message: 'Not found' });
        }
      })
      .catch((err) => next(err));
  }
}

// Needs bikeID as input ad PUT route
async function addBikeToFavorites(req, res, next) {
  const bikeId = req.body;
  const userId = req.user;
  try {
    const bike = await Bike.findById(bikeId);
    bike.favorites = [...bike.favorites, userId];
    bike.save();
    res.json(bike);
  } catch (error) {
    next(error);
  }
}

async function deleteBikeFromFavorites(req, res, next) {
  const bikeId = req.body;
  const userId = req.user._id;
  console.log(userId);
  try {
    const bike = await Bike.findById(bikeId);
    const favoriteFiltered = bike.favorites
      .map((favorite) => favorite.toString())
      .filter((item) => item !== userId);
    bike.favorites = favoriteFiltered;
    bike.save();
    res.json(bike);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllBikes,
  postBike,
  addBikeToFavorites,
  deleteBikeFromFavorites,
  deleteBike,
  getFavoriteBikes,
  getOwnedBikes,
};
