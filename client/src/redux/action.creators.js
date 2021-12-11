import axios from 'axios';
import actionTypes from './action.types';

export function loadBikes() {
  const api = 'http://localhost:3030';

  return async (dispatch) => {
    try {
      const { data: bikes } = await axios.get(`${api}/bikes`);
      dispatch({ type: actionTypes.LOAD_BIKES, bikes });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
    }
  };
}

export function loadOwnedBikes(header) {
  const api = 'http://localhost:3030';

  return async (dispatch) => {
    try {
      const { data: bikes } = await axios.get(`${api}/bikes/owned`, header);
      dispatch({ type: actionTypes.LOAD_BIKES, bikes });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
    }
  };
}

export function loadFavoriteBikes(header) {
  const api = 'http://localhost:3030';

  return async (dispatch) => {
    try {
      const { data: favorites } = await axios.get(`${api}/bikes/favorite`, header);
      dispatch({ type: actionTypes.LOAD_FAVORITES, favorites });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
    }
  };
}

export function deleteBike(config) {
  const api = 'http://localhost:3030';
  return async (dispatch) => {
    try {
      const data = await axios.delete(`${api}/bikes/owned`, config);
      console.log('action creator:', data);
      dispatch({ type: actionTypes.DELETE_BIKE, data });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
    }
  };
}

export function deleteBikeFromFavorite(config) {
  const api = 'http://localhost:3030';

  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${api}/bikes/favorite`, config);
      dispatch({ type: actionTypes.DELETE_FROM_FAVORITES, data });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
    }
  };
}
export function addBikeToFavorite(bikeId, headers) {
  const url = 'http://localhost:3030';

  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${url}/bikes/favorite`, bikeId, headers);
      dispatch({ type: actionTypes.ADD_TO_FAVORITES, data });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
    }
  };
}

export function logUser(userData) {
  const api = 'http://localhost:3030';

  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${api}/login`, userData);
      dispatch({ type: actionTypes.LOGIN_USER, data });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
    }
  };
}

export function logOutUser() {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOGOUT_USER });
  };
}
