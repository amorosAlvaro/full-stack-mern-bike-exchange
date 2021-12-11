import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBikes, loadFavoriteBikes } from '../../redux/action.creators';
import List from '../common/List/List';

const AllBikesList = function AllBikesList() {
  const dispatch = useDispatch();

  const bikes = useSelector((store) => store.bikes);
  const token = useSelector((store) => store.login);
  // const favorites = useSelector((store) => store.favorites);

  const headers = {
    headers: {
      'auth-token': token
    }
  };
  useEffect(() => {
    dispatch(loadBikes());
    dispatch(loadFavoriteBikes(headers));
  }, [dispatch]);

  return (
    <List list={bikes} type="allBikes" />
  );
};

export default AllBikesList;
