/* eslint-disable no-case-declarations */
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
      console.log('ACTION DATA:', action.data);
      console.log('OLD_ARRAY', nextFavoriteBikes);
      const newArray = nextFavoriteBikes.filter((element) => element._id !== action.data);
      console.log('NEW_ARRAY', newArray);
      return newArray;
    default:
      return nextFavoriteBikes;
  }
}

export default favoriteBikesReducer;
