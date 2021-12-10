import actionTypes from '../action.types';

const initialFavoriteBikes = [];

function favoriteBikesReducer(favorites = initialFavoriteBikes, action) {
  let nextFavoriteBikes = favorites;
  // console.log('facorites IN FAVORITE REDUCER', action.favorites);

  switch (action.type) {
    case actionTypes.LOAD_FAVORITES:
      nextFavoriteBikes = action.favorites;
      return nextFavoriteBikes;
    case actionTypes.DELETE_FROM_FAVORITES:
      return nextFavoriteBikes.filter((element) => element.id !== action.data);
    default:
      return nextFavoriteBikes;
  }
}

export default favoriteBikesReducer;
