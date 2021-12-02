const userRouter = require('express').Router();
const authentication = require('../helpers/verification.helper');

const { addUser, deleteUser } = require('../controllers/users.controllers');

userRouter.post('/', addUser);
userRouter.delete('/', authentication, deleteUser);

module.exports = userRouter;
