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

export function logUser(userData) {
  const api = 'http://localhost:3030';

  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${api}/login`, userData);
      console.log(data);
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
