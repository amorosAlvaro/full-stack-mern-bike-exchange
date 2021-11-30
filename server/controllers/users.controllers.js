const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

async function addUser(req, res, next) {
  try {
    const user = req.body;
    user.password = await bcrypt.hash(req.body.password, 10);
    const newUser = User.create(user);
    res.status(201).send(newUser);
  } catch (error) {
    next(error);
  }
}

function getUserByName(req, res, next) {
  if (!req.params.userName) {
    next(new Error('Invalid name'));
    return;
  }
  const { userName } = req.params;
  User.find({ userName })
    .then((result) => res.json(result))
    .catch((err) => next(err));
}

module.exports = { addUser, getAllUsers, getUserByName };
