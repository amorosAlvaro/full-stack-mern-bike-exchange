/* eslint-disable max-len */
import axios from 'axios';
import {
  loadBikes, loadBikeById, loadOwnedBikes, loadFavoriteBikes, deleteBike, deleteBikeFromFavorite, addBikeToFavorite, logUser
} from './action.creators';
import actionTypes from './action.types';

jest.mock('axios');

describe('Given the action creator file', () => {
  const response = {
    data: [
      { _id: 1 }
    ]
  };

  const bike = {
    _id: '2',
    owner: {}
  };

  const dispatch = jest.fn();
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('When loadBikes is called', () => {
    test('it should dispatch the bikes array', async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));

      await loadBikes()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_BIKES,
        bikes: response.data
      });
    });
    test('if promise rejected, it should dispatch the and error', async () => {
      axios.get.mockRejectedValue('error');
      await loadBikes()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.FAILED_TO_LOAD,
        error: 'error'
      });
    });
  });

  describe('When loadBikeById is called', () => {
    test('it should dispatch the bikes array', () => {
      loadBikeById({ bike });
    });
  });

  describe('When loadOwnedBikes is called', () => {
    test('it should dispatch the bikes array', async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));

      await loadOwnedBikes()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_BIKES,
        bikes: response.data
      });
    });
    test('if promise rejected, it should dispatch the and error', async () => {
      axios.get.mockRejectedValue('error');
      await loadOwnedBikes()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.FAILED_TO_LOAD,
        error: 'error'
      });
    });
  });

  describe('When loadFavoriteBikes is called', () => {
    test('it should dispatch the bikes array', async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));

      await loadFavoriteBikes()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
    test('if promise rejected, it should dispatch the and error', async () => {
      axios.get.mockRejectedValue('error');
      await loadFavoriteBikes()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.FAILED_TO_LOAD,
        error: 'error'
      });
    });
  });

  describe('When deleteBike is called', () => {
    test('it should dispatch the bikes array', async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));

      await deleteBike()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
    test('if promise rejected, it should dispatch the and error', async () => {
      axios.get.mockRejectedValue(new Error());
      await deleteBike()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('When deleteBikeFromFavorite is called', () => {
    test('it should dispatch the bikes array', async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));

      await deleteBikeFromFavorite()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
    test('if promise rejected, it should dispatch the and error', async () => {
      axios.get.mockRejectedValue(new Error());
      await deleteBikeFromFavorite()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('When addBikeToFavorite is called', () => {
    test('it should dispatch the bikes array', async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));

      await addBikeToFavorite()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
    test('if promise rejected, it should dispatch the and error', async () => {
      axios.get.mockRejectedValue('error');
      await addBikeToFavorite()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('When logUser is called', () => {
    test('it should dispatch the bikes array', async () => {
      axios.get.mockResolvedValue(Promise.resolve(response));

      await logUser()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
    test('if promise rejected, it should dispatch the and error', async () => {
      axios.get.mockRejectedValue('error');
      await logUser()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
