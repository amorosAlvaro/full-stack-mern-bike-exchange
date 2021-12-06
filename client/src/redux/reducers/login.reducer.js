import actionTypes from '../action.types';

let initialToken = 'guest';

function loginReducer(data = initialToken, action) {
  let nextToken = data;
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      nextToken = action.data;
      console.log(action.type);
      console.log(nextToken);
      return nextToken;
    case actionTypes.LOGOUT_USER:
      nextToken = null;
      return nextToken;
    default:
      return nextToken;
  }
}

export default loginReducer;
