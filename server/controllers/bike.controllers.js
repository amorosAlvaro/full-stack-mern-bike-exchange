const Bike = require('../models/bike.model');

// TODO: FIX THAT USER CAN ADD ONLY ONE TIME TO FAVORITES

// This comes with query option. Needs populate to be added
async function getAllBikes(req, res, next) {
  const query = req.body;
  try {
    const bikes = await Bike.find(query).populate([
      {
        path: 'owner',
        select: ['userName', 'email', 'province'],
      },
      {
        path: 'pictures',
        select: ['avatar'],
      },
    ]);

    res.json(bikes);
  } catch (error) {
    next(error);
  }
}

// Gets bike info from user & ownerID from token (PROTECTED)
async function postBike(req, res, next) {
  try {
    const bike = req.body;
    bike.owner = req.user._id;
    const newBike = Bike.create(bike);
    res.status(201).json({ newBike });
  } catch (error) {
    next(error);
  }
}

// Checks if user and owner are the same. Gets id to delete from user
async function deleteBike(req, res, next) {
  const tokenUserId = req.user._id;
  const bikeOwnerId = req.body.owner;
  if (tokenUserId === bikeOwnerId) {
    await Bike.findByIdAndDelete(req.body._id);
    res.status(202).json({ deletedId: req.params._id });
  } else {
    next(new Error());
  }
}

// SAVE NEXT NEED TO BE ASYNC? // DO WE NEED SAVE HERE?
// Needs bikeID from body and userID from token
async function addBikeToFavorites(req, res, next) {
  const { bikeId } = req.body;
  const tokenUserId = req.user;

  if (tokenUserId && bikeId) {
    const bike = await Bike.findById(bikeId);
    bike.favorites = [...bike.favorites, tokenUserId];
    bike.save();
    res.json(bike);
  } else {
    next(new Error());
  }
}

async function deleteBikeFromFavorites(req, res, next) {
  const { bikeId } = req.body;
  const userId = req.user;

  if (bikeId && userId) {
    const bike = await Bike.findById(bikeId);
    const favoriteFiltered = bike.favorites
      .map((favorite) => favorite.toString())
      .filter((item) => item !== userId._id);
    bike.favorites = favoriteFiltered;
    bike.save();
    res.json(bike);
  } else {
    next(new Error());
  }
}
// Gets userID from token
async function getOwnedBikes(req, res, next) {
  const userId = req.user;

  if (userId) {
    const bikes = await Bike.find().populate({
      path: 'pictures',
      select: ['avatar'],
    });
    const bikesFiltered = [];
    bikes.forEach((item, index) => {
      if (item.owner.toString() === userId._id) {
        bikesFiltered.push(bikes[index]);
      }
    });
    res.json(bikesFiltered);
  } else {
    next(new Error());
  }
}

// Gets userID from token
async function getFavoriteBikes(req, res, next) {
  const userId = req.user;

  if (userId) {
    const bikes = await Bike.find().populate([
      {
        path: 'owner',
        select: ['userName', 'email', 'province'],
      },
      {
        path: 'pictures',
        select: ['avatar'],
      },
    ]);

    const bikesFiltered = [];
    bikes.forEach((item, index) => {
      item.favorites.map((favorite) => {
        bikesFiltered.push(bikes[index]);
      });
    });
    res.json(bikesFiltered);
  } else {
    next(new Error());
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