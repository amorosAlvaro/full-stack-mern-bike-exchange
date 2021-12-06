import actionTypes from '../action.types';

const initialBikes = [];

function bikesReducer(bikes = initialBikes, action) {
  let nextBikes = bikes;
  switch (action.type) {
    case actionTypes.LOAD_BIKES:
      nextBikes = action.bikes;
      return nextBikes;
    default:
      return nextBikes;
  }
}

export default bikesReducer;
