import actionTypes from '../action.types';

const initialToken = null;

function loginReducer(data = initialToken, action) {
  let nextToken = data;
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      nextToken = action.data;
      return nextToken;
    case actionTypes.LOGOUT_USER:
      nextToken = null;
      return nextToken;
    default:
      return nextToken;
  }
}

export default loginReducer;
