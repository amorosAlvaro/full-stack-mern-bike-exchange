const Bike = require('../models/bike.model');

async function getAllBikes({ query }, res) {
  try {
    const bikes = await Bike.find(query);
    res.json(bikes);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postBike(req, res, next) {
  try {
    const bike = req.body;
    bike.user = req.user._id;
    const newBike = Bike.create(bike);
    res.status(201).send(newBike);
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllBikes, postBike };
