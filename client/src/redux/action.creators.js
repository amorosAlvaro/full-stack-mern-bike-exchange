/* eslint-disable no-unused-vars */
import axios from 'axios';
import url from 'url';
import actionTypes from './action.types';

export function loadBikes(config) {
  const api = 'http://localhost:3030';

  return async (dispatch) => {
    try {
      const { data: bikes } = await axios.get(`${api}/bikes`, config);
      dispatch({ type: actionTypes.LOAD_BIKES, bikes });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
    }
  };
}

export function loadBikeById(bikes) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.LOAD_BIKES, bikes });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
    }
  };
}

// export function loadBikeById(id) {
//   const api = 'http://localhost:3030';
//   return async (dispatch) => {
//     try {
//       const { data: allBikes } = await axios.get(`${api}/bikes`);
//       console.log('Config in action-creator:', id);
//       console.log('Data in action-creator', allBikes);
//       const bikes = allBikes.filter((element) => element._id === id);
//       console.log('Bike after filter', bikes);

//       dispatch({ type: actionTypes.LOAD_BIKES, bikes });
//     } catch (error) {
//       dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
//     }
//   };
// }

// export function loadBikeById(id) {
//   const api = 'http://localhost:3030';

//   return async (dispatch) => {
//     try {
//       console.log('id in axios', id);
//       const bike = await axios.get(`${api}/details/${id}`);
//       console.log('Return from axios:', bike);
//       dispatch({ type: actionTypes.LOAD_BIKES, bike });
//     } catch (error) {
//       dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
//     }
//   };
// }

// export async function loadBikeById(config) {
//   const api = 'http://localhost:3030';
//   return async (dispatch) => {
//     try {
//       const params = new url.URLSearchParams(config);
//       const bike = await axios.get(`${api}/get?${params}`);
//       dispatch({ type: actionTypes.LOAD_BIKES, bike });
//     } catch (error) {
//       dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
//     }
//   };
// }

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
  const api = 'http://localhost:3030';

  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${api}/bikes/favorite`, bikeId, headers);
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
