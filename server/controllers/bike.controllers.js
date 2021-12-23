const Bike = require('../models/bike.model');
const cloudinary = require('../config/cloudinary');

async function getAllBikes(req, res, next) {
  try {
    const query = req.body;
    const bikes = await Bike.find(query).populate([
      {
        path: 'owner',
        select: ['userName', 'email', 'province', 'phone', 'name', 'surname']
      }
    ]);
    res.status(201).json(bikes);
  } catch (error) {
    next(error);
  }
}

async function postBike(req, res, next) {
  try {
    const { secure_url, public_id } = await cloudinary.uploader.upload(req.file.path);
    const {
      make, bike_model, km, year, change, description
    } = req.body;
    const owner = req.user;

    const newBike = await Bike.create({
      make,
      bike_model,
      km,
      year,
      change,
      description,
      owner,
      avatar: secure_url,
      cloudinary_id: public_id
    });
    res.status(201).json(newBike);
  } catch (error) {
    next(error);
  }
}

async function deleteBike(req, res, next) {
  try {
    const bike = await Bike.findById(req.body._id);
    await cloudinary.uploader.destroy(bike.cloudinary_id);
    await Bike.findByIdAndDelete(bike._id);
    res.status(201).json(bike);
  } catch (error) {
    next(error);
  }
}

async function addBikeToFavorites(req, res, next) {
  try {
    const bikeId = req.body;
    const tokenUserId = req.user;
    const bike = await Bike.findById(bikeId);
    bike.favorites = [...bike.favorites, tokenUserId];
    bike.save();
    res.status(200).json(bike);
  } catch (error) {
    next(error);
  }
}

async function deleteBikeFromFavorites(req, res, next) {
  try {
    const bikeId = req.body;
    const userId = req.user._id;
    const bike = await Bike.findById(bikeId);
    const favoriteFiltered = bike.favorites
      .map((favorite) => favorite.toString())
      .filter((item) => item !== userId);
    bike.favorites = favoriteFiltered;
    bike.save();
    res.status(200).json(bike);
  } catch (error) {
    next(error);
  }
}
async function getOwnedBikes(req, res, next) {
  try {
    const userId = req.user._id;
    const bikes = await Bike.find().populate([
      {
        path: 'owner',
        select: ['userName', 'email', 'province', 'phone', 'name', 'surname']
      }
    ]);
    const bikesFiltered = [];
    bikes.forEach((item, index) => {
      if (item.owner.toString() === userId) {
        bikesFiltered.push(bikes[index]);
      }
    });
    res.status(200).json(bikesFiltered);
  } catch (error) {
    next(error);
  }
}

async function getFavoriteBikes(req, res, next) {
  try {
    const bikes = await Bike.find().populate([
      {
        path: 'owner',
        select: ['userName', 'email', 'province', 'phone', 'name', 'surname']
      }
    ]);
    const bikesFiltered = [];
    bikes.forEach((item, index) => {
      item.favorites.forEach(() => {
        bikesFiltered.push(bikes[index]);
      });
    });
    res.status(200).json(bikesFiltered);
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
  getOwnedBikes
};
