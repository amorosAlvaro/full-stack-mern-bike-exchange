const mongoose = require('mongoose');
const User = require('../models/user.model');
const auth = require('../helpers/auth.helpers');
const { logUser } = require('./login.controller');

jest.mock('../models/user.model');
jest.mock('../helpers/auth.helpers');

describe('Given the login controller', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = { params: {} };
    res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    next = jest.fn();
  });
  afterAll(() => {
    mongoose.disconnect();
  });
  describe('When a users tries to log in, logUser is triggered', () => {
    describe('If password and user are correct, a promise is resolved', () => {
      beforeEach(() => {
        // Not sure what this does exactly
        User.findOne.mockResolvedValue({
          _id: '546n5jk6nk53l54',
          username: 'Alvaro',
          password: '1234',
          email: 'alvaro.amoros23@gmail.com'
        });
        auth.checkPasswd = jest.fn().mockResolvedValue(true);
        auth.createJWT = jest.fn().mockImplementation(() => 'token');
        req.body = {
          username: 'Paco',
          email: 'paco@email.com',
          password: '123'
        };
      });
      test('userModel exists and has the method findOne', () => {
        expect(User.findOne).toBeTruthy();
      });
      test('User should be logged', async () => {
        const result = await logUser(req, res, next);
        expect(res.json).toHaveBeenCalled();
        expect(result).toBeTruthy();
      });
    });

    describe('If user or password are not valid (promise is resolved', () => {
      beforeEach(() => {
        User.findOne.mockResolvedValue([]);
        auth.checkPasswd = jest.fn().mockResolvedValue(false);
        req.body = {
          userName: 'John',
          email: '',
          password: ''
        };
      });
      test('User should not be logged', async () => {
        await logUser(req, res, next);
        expect(res.status).toHaveBeenCalledWith(401);
      });
    });

    describe('user is not valid (promise is rejected)', () => {
      beforeEach(() => {
        User.findOne.mockResolvedValue([]);
        auth.checkPasswd = jest.fn().mockResolvedValue(false);
        req.body = {
          username: 'John',
          password: ''
        };
      });
      test('userModel exists and has method findOne', () => {
        expect(User.findOne).toBeTruthy();
      });
      test('User should not be logged', async () => {
        await logUser(req, res, next);
        expect(res.status).toHaveBeenCalledWith(401);
      });
    });
  });
});
