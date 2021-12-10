import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFavoriteBikes } from '../../redux/action.creators';
import List from '../common/List/List';

const FavoriteBikesList = function FavoriteBikesList() {
  const dispatch = useDispatch();
  const bikes = useSelector((store) => store.bikes);
  const token = useSelector((store) => store.login);

  const headers = {
    headers: {
      'auth-token': token
    }
  };

  useEffect(() => {
    dispatch(loadFavoriteBikes(headers));
  }, [dispatch]);

  return (
    <List list={bikes} type="favorite" />
  );
};

export default FavoriteBikesList;
