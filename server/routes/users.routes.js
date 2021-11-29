const router = require('express').Router();

const { addUser } = require('../controllers/users.controllers');

router.post('/', addUser);

module.exports = router;
