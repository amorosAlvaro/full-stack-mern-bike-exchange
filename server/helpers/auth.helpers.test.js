const auth = require('./auth.helpers');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

test('should ... checkPasswd ', async () => {
  const password = '';
  const user = { password: '1234' };
  await auth.checkPasswd(password, user);
  expect(bcrypt.compare).toHaveBeenCalled();
});

test('should ... checkPasswd ', async () => {
  const password = '';
  const user = { password: '' };
  const result = await auth.checkPasswd(password, user);
  expect(result).toBe(false);
});

test('should ... createJWT ', () => {
  const user = { name: '', id: '' };
  auth.createJWT(user);
  expect(jwt.sign).toHaveBeenCalled();
});
