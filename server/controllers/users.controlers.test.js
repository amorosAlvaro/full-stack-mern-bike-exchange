const { addUser, deleteUser } = require('./users.controllers');
const User = require('../models/user.model');

jest.mock('../models/user.model');

describe('Given the Users controller', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = { params: {} };
    res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.user = jest.fn().mockReturnValue(res);
    next = jest.fn();
  });

  describe('When trining to add user , addUser is triggered', () => {
    describe('When user is being added, promise is resolved', () => {
      beforeEach(() => {
        User.create.mockReturnValue({});
      });
      test('User model exists and has the method create', () => {
        expect(User.create).toBeTruthy();
      });
      describe('If user Name exists', () => {
        beforeEach(() => {
          req.body = {
            username: 'Alvaro',
            password: '123',
          };
        });
        test('Json is called', async () => {
          await addUser(req, res, next);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('User is not present', () => {
        beforeEach(() => {
          req.body = {
            email: '123',
          };
        });
        test('Next is called', async () => {
          await addUser(req, res, next);
          expect(next).toHaveBeenCalled();
        });
      });
      describe('user cold not be added (promise is rejected)', () => {
        beforeEach(() => {
          req.body = {};
          User.create.mockReturnValue({});
        });
        test('Then call next', async () => {
          await addUser(req, res, next);
          expect(res.json).not.toHaveBeenCalled();
          expect(next).toHaveBeenCalled();
        });
      });
    });
  });
  describe('When we try to delete a user deleteUser is triggered', () => {
    describe('and the userId exists', () => {
      beforeEach(() => {
        req.user = 'dsadsf';
        User.findByIdAndDelete.mockResolvedValue({});
      });
      test('The User model exists and it has a findByIdAndDelete method', () => {
        expect(User.findByIdAndDelete).toBeTruthy();
      });
      test('Then call status 202 and json', async () => {
        await deleteUser(req, res, next);
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(202);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And userID does not exist', () => {
      beforeEach(() => {
        req.user = '1vfsddvc';
        User.findByIdAndDelete.mockResolvedValue();
      });
      test('The User model exists and it has a findByIdAndDelete method', () => {
        expect(User.findByIdAndDelete).toBeTruthy();
      });
      test('Then call status 404 & json', async () => {
        await deleteUser(req, res, next);
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalled();
      });
    });
  });
});
