const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

async function addUser(req, res, next) {
  try {
    const user = req.body;
    user.password = await bcrypt.hash(req.body.password, 10);
    const newUser = User.create(user);
    res.json(newUser);
    // res.status(201).send(newUser);
  } catch (error) {
    next(error);
  }
}

function deleteUser(req, res, next) {
  User.findByIdAndDelete(req.user._id).then((result) => {
    if (result) {
      res.status(202).json({ deleteId: req.user._id });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
}

// function getUserByName(req, res, next) {
//   if (!req.params.userName) {
//     next(new Error('Invalid name'));
//     return;
//   }
//   const { userName } = req.params;
//   User.find({ userName })
//     .then((result) => res.json(result))
//     .catch((err) => next(err));
// }

module.exports = { addUser, deleteUser };
