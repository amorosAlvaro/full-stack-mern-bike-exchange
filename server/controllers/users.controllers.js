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

module.exports = { addUser };
