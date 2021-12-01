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
};
