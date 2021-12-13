import actionTypes from '../action.types';

const initialBikes = [];

function bikesReducer(bikes = initialBikes, action) {
  let nextBikes = bikes;

  switch (action.type) {
    case actionTypes.LOAD_BIKES:
      nextBikes = action.bikes;
      return nextBikes;
    case actionTypes.DELETE_BIKE:
      return nextBikes.filter((element) => element._id !== action.data.data);
    default:
      return nextBikes;
  }
}

export default bikesReducer;
