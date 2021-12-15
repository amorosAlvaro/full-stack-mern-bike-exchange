const jwt = require('jsonwebtoken');
const auth = require('../helpers/auth.helpers');
const User = require('../models/user.model');

async function logUser(req, res) {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const validPassword = await auth.checkPasswd(password, user);

    if (user && validPassword) {
      const jwToken = jwt.sign({ _id: user.id }, process.env.SECRET);
      res.header('auth-token', jwToken).send(jwToken);
      user.accessToken = jwToken;
      return jwToken;
    }
  } catch {
    res.status(402).json({ message: 'Invalid user or passwd' });
  }
}

module.exports = { logUser };
