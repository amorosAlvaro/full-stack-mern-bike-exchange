const Bike = require('../models/bike.model');

async function getAllBikes({ query }, res, next) {
  try {
    const bikes = await Bike.find(query);
    res.json(bikes);
  } catch (error) {
    next(error);
  }
}

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

async function addFavorites(req, res, next) {
  const { _id } = req.body;
}

module.exports = { getAllBikes, postBike };
