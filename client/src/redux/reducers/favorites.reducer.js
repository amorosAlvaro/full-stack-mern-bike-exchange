import actionTypes from '../action.types';

const initialFavoriteBikes = [];

function favoriteBikesReducer(favorites = initialFavoriteBikes, action) {
  let nextFavoriteBikes = favorites;

  switch (action.type) {
    case actionTypes.LOAD_FAVORITES:
      nextFavoriteBikes = action.favorites;
      return nextFavoriteBikes;
    case actionTypes.ADD_TO_FAVORITES:
      return [...nextFavoriteBikes, action.data];
    case actionTypes.DELETE_FROM_FAVORITES:

      return nextFavoriteBikes.filter((element) => element._id !== action.data._id);
    default:
      return nextFavoriteBikes;
  }
}

export default favoriteBikesReducer;
