const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

async function addUser(req, res, next) {
  try {
    const user = req.body;
    user.password = await bcrypt.hash(req.body.password, 10);
    const newUser = User.create(user);
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const userId = req.user._id;
    await User.findByIdAndDelete(userId);
    res.status(200).json(userId);
  } catch (error) {
    next(error);
  }
}

module.exports = { addUser, deleteUser };
