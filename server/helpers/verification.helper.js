const jwt = require('jsonwebtoken');

function authentication(req, res, next) {
  const token = req.header('auth-token');
  console.log('verification', token);
  if (!token) {
    res.status(401).send({ message: 'Access denied' });
  }
  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
}

module.exports = authentication;
