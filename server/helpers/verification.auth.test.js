const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authentication = require('./verification.helper');

dotenv.config();
jest.mock('jsonwebtoken');

describe('Given the authentication', () => {
  let req;
  let res;
  let next;

  afterAll(() => {
    mongoose.disconnect();
  });
  describe('When the token', () => {
    describe('then is false', () => {
      test('Should Be te response with 401', () => {
        req = { params: {} };
        res = {};
        next = jest.fn();
        res.status = jest.fn().mockReturnValue(res);
        req.header = jest.fn().mockReturnValue(false);
        res.send = jest.fn().mockReturnValue(res);
        const token = false;
        authentication(req, res, next);
        expect(res.status).toHaveBeenCalledWith(401);
      });
    });
    describe('then Is true', () => {
      test('verify the token and pass the midleware (promise resolved)', () => {
        req = { params: {} };
        res = {};
        next = jest.fn();
        res.status = jest.fn().mockReturnValue(res);
        req.header = jest.fn().mockReturnValue(true);
        res.send = jest.fn().mockReturnValue(res);
        authentication(req, res, next);
        expect(next).toHaveBeenCalled();
      });
    });
    test('verify the token but middleware rejected', () => {
      req = { params: {} };
      res = {};
      next = jest.fn();
      res.status = jest.fn().mockReturnValue(res);
      req.header = jest.fn().mockReturnValue(true);
      res.send = jest.fn().mockReturnValue(res);
      jwt.verify = () => {
        throw new Error();
      };
      console.log(jwt.verify);
      authentication(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
    });
  });
});
