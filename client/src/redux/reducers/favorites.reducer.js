import actionTypes from '../action.types';

const initialFavoriteBikes = [];

function favoriteBikesReducer(favorites = initialFavoriteBikes, action) {
  let nextFavoriteBikes = favorites;
  console.log('REDUCER BEFOR SWITCH', action);

  switch (action.type) {
    case actionTypes.LOAD_FAVORITES:
      nextFavoriteBikes = action.favorites;
      return nextFavoriteBikes;
    case actionTypes.ADD_TO_FAVORITES:
      console.log('ACTION PAYLOAD IN REDUCER:', action);
      // nextFavoriteBikes = [...nextFavoriteBikes, action.data];
      return [...nextFavoriteBikes, action.data];
    case actionTypes.DELETE_FROM_FAVORITES:
      return nextFavoriteBikes.filter((element) => element.id !== action.data);
    default:
      return nextFavoriteBikes;
  }
}

export default favoriteBikesReducer;
