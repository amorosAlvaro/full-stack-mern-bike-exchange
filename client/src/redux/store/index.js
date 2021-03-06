import {
  combineReducers, applyMiddleware, compose, createStore
} from 'redux';
import thunk from 'redux-thunk';
import bikesReducer from '../reducers/bikes.reducer';
import loginReducer from '../reducers/login.reducer';
import favoriteBikesReducer from '../reducers/favorites.reducer';

export default function configureStore(preloadState) {
  const rootReducer = combineReducers({
    bikes: bikesReducer,
    login: loginReducer,
    favorites: favoriteBikesReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    preloadState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
