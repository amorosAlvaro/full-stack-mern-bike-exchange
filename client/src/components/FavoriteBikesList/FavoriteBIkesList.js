import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFavoriteBikes } from '../../redux/action.creators';
import Card from '../common/Card/Card';

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
      <Card list={favorites} type="favorite" />
    </>
  );
};

export default FavoriteBikesList;
