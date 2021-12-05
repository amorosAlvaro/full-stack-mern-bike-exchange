const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { mongoConnect } = require('./connect');

dotenv.config();

describe('given a connection with MongoDB', () => {
  afterEach(() => {
    mongoose.disconnect();
  });

  test('then should exist our DB', async () => {
    const connect = await mongoConnect();
    expect(connect.connections[0].name).toBe('bike_exchange');
  });
});

describe('given a failed connection with MongoDB', () => {
  test('then should exit ', async () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    await mongoConnect('error');
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});
