import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBikes } from '../../redux/action.creators';
import List from '../common/List/List';

const AllBikesList = function AllBikesList() {
  const dispatch = useDispatch();

  const bikes = useSelector((store) => store.bikes);

  useEffect(() => {
    dispatch(loadBikes());
  }, [dispatch]);

  return (
    <List list={bikes} />
  );
};

export default AllBikesList;
