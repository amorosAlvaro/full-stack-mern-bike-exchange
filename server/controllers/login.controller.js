const auth = require('../helpers/auth.helpers');
const User = require('../models/user.model');

async function logUser(req, res) {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const validPassword = await auth.checkPasswd(password, user);

    if (user && validPassword) {
      const jwToken = auth.createJWT(user);
      res.json({
        user: user.name,
        token: jwToken,
      });
      return jwToken;
    }
  } catch {
    res.status(401).json({ message: 'Invalid user or passwd' });
  }
  return res.status(401).json({ message: 'Invalid user or passwd' });
}

module.exports = { logUser };
