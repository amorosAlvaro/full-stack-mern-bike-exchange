import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadOwnedBikes } from '../../redux/action.creators';
import Card from '../common/Card/Card';

const OwnedBikesList = function OwnedBikesList() {
  const dispatch = useDispatch();
  const bikes = useSelector((store) => store.bikes);
  const token = useSelector((store) => store.login);

  const headers = {
    headers: {
      'auth-token': token
    }
  };

  useEffect(() => {
    dispatch(loadOwnedBikes(headers));
  }, [dispatch]);

  return (
    <>
      <h2>Your Bikes</h2>
      <Card list={bikes} type="owned" />
    </>
  );
};

export default OwnedBikesList;
