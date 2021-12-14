import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFavoriteBikes } from '../../redux/action.creators';
import List from '../common/List/List';

const FavoriteBikesList = function FavoriteBikesList() {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.login);
  const favorites = useSelector((store) => store.favorites);

  const headers = {
    headers: {
      'auth-token': token
    }
  };

  useEffect(() => {
    dispatch(loadFavoriteBikes(headers));
  }, [dispatch]);

  return (
    <>
      <h2>Favorites</h2>
      <List list={favorites} type="favorite" />
    </>
  );
};

export default FavoriteBikesList;


C:\sonar-scanner-4.6.2.2472-windows\bin\sonar-scanner.bat -D"sonar.projectKey=Final-project-bikes" -D"sonar.sources=." -D"sonar.host.url=http://127.0.0.1:9000" -D"sonar.login=996660002f365fe05cb9ced28b7d086c384ca389"