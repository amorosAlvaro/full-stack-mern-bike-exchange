const userRouter = require('express').Router();

const {
  addUser,
  getAllUsers,
  getUserByName,
} = require('../controllers/users.controllers');

userRouter.get('/', getAllUsers);
userRouter.get('/:name', getUserByName);
userRouter.post('/', addUser);

module.exports = userRouter;
