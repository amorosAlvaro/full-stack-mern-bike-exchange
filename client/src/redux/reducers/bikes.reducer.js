import actionTypes from '../action.types';

const initialBikes = [];

function bikesReducer(bikes = initialBikes, action) {
  let nextBikes = bikes;

  switch (action.type) {
    case actionTypes.LOAD_BIKES:
      nextBikes = action.bikes;
      return nextBikes;
    case actionTypes.DELETE_BIKE:
      console.log('nextBikes;', nextBikes);
      console.log('action.data', action.data.data);
      return nextBikes.filter((element) => element._id !== action.data.data);
    default:
      return nextBikes;
  }
}

export default bikesReducer;
