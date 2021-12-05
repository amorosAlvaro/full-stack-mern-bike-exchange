const loginRouter = require('express').Router();

const { logUser } = require('../controllers/login.controller');

loginRouter.post('/', logUser);

module.exports = loginRouter;
