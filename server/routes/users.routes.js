const userRouter = require('express').Router();

const { addUser, getUserByName } = require('../controllers/users.controllers');

userRouter.get('/:name', getUserByName);
userRouter.post('/', addUser);

module.exports = userRouter;
