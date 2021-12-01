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

async function addBikeToFavorites(req, res, next) {
  const bikeId = req.body;
  console.log();
  const userId = req.user;
  console.log(bikeId);
  console.log(userId);
  try {
    const bike = await Bike.findById(bikeId);
    bike.favorites = [...bike.favorites, userId];
    bike.save();
    res.json(bike);
  } catch (error) {
    next(error);
  }
}

// async function addRecipeToUser(req, res, next) {
//   const { id, recipeid } = req.params;
//   try {
//     const user = await User.findById(id);
//     user.recipes = [...user.recipes, recipeid];
//     user.save();
//     res.json(user);
//   } catch (error) {
//     next(error);
//   }
// }

// Protect this route
// function addFavorites(req, res, next) {
//   const bikeId = req.body._id;
//   console.log(bikeId);
//   const userId = req.user._id;
//   console.log(userId);
//   Bike.findOneAndUpdate(bikeId, { $set: { favorites: userId } }).then(() => {
//     res.json('okey');
//   });

//   res.send('Done');
// Bike.findByIdAndUpdate(
//   req.body._idt

// )

// userId = req.user._id;
// await req.body.addFavorites.push(userId);
// res.status(201).send(userId);

module.exports = { getAllBikes, postBike, addBikeToFavorites };
