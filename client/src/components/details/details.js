/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadBikeById } from '../../redux/action.creators';
import List from '../common/List/List';

// import List from '../common/List/List';

const Details = function Details() {
  const { id } = useParams();

  const config = {
    params: {
      id
    }
  };

  const dispatch = useDispatch();
  const bikes = useSelector((store) => store.bikes);
  console.log('Bikes state in Details', bikes);
  const bike = bikes.filter((element) => element._id === id);

  useEffect(() => {
    dispatch(loadBikeById(bike));
  }, [dispatch]);

  //  const bikes = allBikes.filter((element) => element._id === id);
  // useEffect(() => {
  //   dispatch(loadBikeById(id));
  // }, [dispatch]);

  // const headers = {
  //   headers: {
  //     'auth-token': token
  //   }
  // };

  // useEffect(() => {
  //   dispatch(loadBikes(config));
  //   dispatch(loadFavoriteBikes(headers));
  // }, [dispatch]);

  return (
    <>
      <div>
        <h2>Details</h2>
      </div>
      <div>
        <List list={bikes} type="details" />
      </div>

    </>
  );
};

export default Details;
