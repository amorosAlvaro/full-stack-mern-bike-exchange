const {
  getAllBikes,
  postBike,
  deleteBike,
  addBikeToFavorites,
  deleteBikeFromFavorites,
  getOwnedBikes,
  getFavoriteBikes,
} = require('./bike.controllers');
const Bike = require('../models/bike.model');

jest.mock('../models/bike.model');

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
  describe('When getAllBikes is triggered', () => {
    describe('and it works, promise is resolved', () => {
      beforeEach(() => {
        Bike.find.mockReturnValue([]);
      });
      test('call has been send', async () => {
        await getAllBikes(req, res, next);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('If it does not work, promise gets rejected', () => {
      beforeEach(() => {
        Bike.find.mockRejectedValue();
      });
      test('Then call next', async () => {
        await getAllBikes(req, res, next);
        expect(next).toHaveBeenCalled();
      });
    });
  });
  describe('When postBike is triggered', () => {
    describe('and it works, promise is resolved', () => {
      beforeEach(() => {
        Bike.create.mockResolvedValue({});
      });
      describe('and the make is present', () => {
        beforeEach(() => {
          req.body = {
            make: 'Ducati',
          };
          req.user = {
            _id: '619516dd75bcdf9b77e6690c',
          };
        });
        test('Then call json', async () => {
          await postBike(req, res, next);
          expect(res.status).toHaveBeenCalled();
          expect(res.status).toHaveBeenCalledWith(201);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('and make is not present', () => {
        beforeEach(() => {
          req.user = {
            _id: '619516dd75bcdf9b77e6690c',
          };
        });
        test('then call next', async () => {
          await postBike(req, res, next);
          expect(next).toHaveBeenCalled();
        });
      });
    });
    describe('When delete bike is triggered', () => {
      describe('and logging id and owner are the same', () => {
        beforeEach(() => {
          req.user = { _id: '619516dd75bcdf9b77e6690c' };
          req.body = { owner: '619516dd75bcdf9b77e6690c' };
          Bike.findByIdAndDelete.mockResolvedValue({});
        });
        test('then call status and json', async () => {
          await deleteBike(req, res, next);
          expect(res.status).toHaveBeenCalled();
          expect(res.status).toHaveBeenCalledWith(202);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('when loggingID and ownerID are not the same', () => {
        beforeEach(() => {
          req.user = { _id: '619516dd75bcdf9b77e6690c' };
          req.body = { owner: '1' };
          Bike.findByIdAndDelete.mockResolvedValue({});
        });
        test('then call status and json', async () => {
          await deleteBike(req, res, next);
          expect(next).toHaveBeenCalled();
        });
      });
    });
    describe('When addBikeToFavorites is triggered', () => {
      describe('and it works, promise is resolved', () => {
        beforeEach(() => {
          req.body = { bikeId: '222' };
          req.user = { _id: '619516dd75bcdf9b77e6690c' };
          Bike.findById.mockReturnValue({
            make: 'Honda',
            favorites: [],
            save: jest.fn(),
          });
        });
        test('call has been send', () => {
          expect(Bike.findById).toBeTruthy();
        });
        test('json should eb called', async () => {
          await addBikeToFavorites(req, res, next);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('next is called', () => {
        describe('promise is rejected', () => {
          beforeEach(() => {
            req.body = { bikeId: '222' };
            Bike.findById.mockReturnValue({
              make: 'Honda',
              favorites: ['645352'],
              save: jest.fn(),
            });
          });
          test('next is called', async () => {
            await addBikeToFavorites(req, res, next);
            expect(next).toHaveBeenCalled();
          });
        });
      });
      describe('When deleteBikeFromFavorites is triggered', () => {
        describe('adn it works, promise is resolved', () => {
          beforeEach(() => {
            req.body = { bikeId: '222' };
            req.user = { _id: '619516dd75bcdf9b77e6690c' };
            Bike.findById.mockReturnValue({
              make: 'Honda',
              favorites: [],
              save: jest.fn(),
            });
          });
          test('call has been send', () => {
            expect(Bike.findById).toBeTruthy();
          });
          test('json is called', async () => {
            await deleteBikeFromFavorites(req, res, next);
            expect(res.json).toHaveBeenCalled();
          });
        });
        describe('If no user id is provided', () => {
          beforeEach(() => {
            req.body = { bikeId: '222' };
            Bike.findById.mockReturnValue({
              make: 'Honda',
              favorites: [],
              save: jest.fn(),
            });
          });
          test('next is called', async () => {
            await deleteBikeFromFavorites(req, res, next);
            expect(next).toHaveBeenCalled();
          });
        });
      });
      describe('When get own bikes is triggered', () => {
        describe('and it works, promise is resolved', () => {
          beforeEach(() => {
            req.user = { userId: '222' };
            Bike.find.mockReturnValue([]);
          });
          test('call has been send and has method find', () => {
            expect(Bike.find).toBeTruthy();
          });
          test('json is called', async () => {
            await getOwnedBikes(req, res, next);
            expect(res.json).toHaveBeenCalled();
          });
        });
        describe('if no user id is provided', () => {
          beforeEach(() => {
            Bike.find.mockReturnValue([]);
          });
          test('next is called', async () => {
            await getOwnedBikes(req, res, next);
            expect(next).toHaveBeenCalled();
          });
        });
      });
      describe('When get all bikes is triggered', () => {
        describe('and promise is resolved', () => {
          beforeEach(() => {
            req.user = { userId: '222' };
            Bike.find.mockReturnValue([]);
          });
          test('call has been send and has method find', () => {
            expect(Bike.find).toBeTruthy();
          });
          test('json is called', async () => {
            await getFavoriteBikes(req, res, next);
            expect(res.json).toHaveBeenCalled();
          });
        });
        beforeEach(() => {
          Bike.find.mockReturnValue([]);
        });
        test('expect next to be called', async () => {
          await getFavoriteBikes(req, res, next);
          expect(next).toHaveBeenCalled();
        });
      });
    });
  });
});
