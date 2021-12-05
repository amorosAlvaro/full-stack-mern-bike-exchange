const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

function checkPasswd(passwd, user) {
  if (!user.password) {
    return false;
  }
  return bcrypt.compare(passwd, user.password);
}

function createJWT(user) {
  const tokenPayload = {
    userName: user.userName,
    id: user._id,
  };

  const secret = process.env.SECRET;

  return jwt.sign(tokenPayload, secret);
}

module.exports = { checkPasswd, createJWT };
