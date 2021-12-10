const Bike = require('../models/bike.model');
const cloudinary = require('../config/cloudinary');

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
    ]);

    res.json(bikes);
  } catch (error) {
    next(error);
  }
}

// Gets bike info from user & ownerID from token (PROTECTED)
async function postBike(req, res, next) {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    const bike = req.body;
    bike.owner = req.user._id;

    const newBike = Bike.create({
      make: req.body.make,
      bike_model: req.body.bike_model,
      km: req.body.km,
      year: req.body.year,
      change: req.body.change,
      owner: bike.owner,
      avatar: result.secure_url,
      // cloudinary_id: result.public_id,
    });
    res.status(201).json(newBike);
  } catch (error) {
    next(error);
  }
}

// Checks if user and owner are the same. Gets id to delete from user
async function deleteBike(req, res, next) {
  try {
    console.log('Constroler Input:', req.body);
    await Bike.findByIdAndDelete(req.body._id);
    res.status(201).json();
  } catch (error) {
    next(error);
  }
}

// async function deleteBike(req, res, next) {
//   const tokenUserId = req.user._id;
//   const bikeOwnerId = req.body.owner;
//   if (tokenUserId) {
//     await Bike.findByIdAndDelete(req.body._id);
//     res.status(202).json();
//   } else {
//     next(new Error());
//   }
// }

// SAVE NEXT NEED TO BE ASYNC? // DO WE NEED SAVE HERE?
// Needs bikeID from body and userID from token
async function addBikeToFavorites(req, res, next) {
  const bikeId = req.body;
  const tokenUserId = req.user;

  if (tokenUserId && bikeId) {
    const bike = await Bike.findById(bikeId);
    bike.favorites = [...bike.favorites, tokenUserId];
    bike.save();
    console.log('RES FROM SERVER', bike);
    res.json(bike);
  } else {
    next(new Error());
  }
}

async function deleteBikeFromFavorites(req, res, next) {
  const bikeId = req.body;
  const userId = req.user;

  if (bikeId && userId) {
    const bike = await Bike.findById(bikeId);
    const favoriteFiltered = bike.favorites
      .map((favorite) => favorite.toString())
      .filter((item) => item !== userId._id);
    bike.favorites = favoriteFiltered;
    bike.save();
    console.log('RES FROM DELETEFAVORITE CONTROLLER:', bike);
    res.json(bike);
  } else {
    console.log('error in controler');
    next(new Error());
  }
}
// Gets userID from token
async function getOwnedBikes(req, res, next) {
  const userId = req.user;

  if (userId) {
    const bikes = await Bike.find();
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
