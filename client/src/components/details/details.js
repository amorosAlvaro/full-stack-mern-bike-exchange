import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { loadBikes } from '../../redux/action.creators';

async function Details() {
  const { bikeId } = useParams();
  const [bikeName, setBikeName] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBikes(bikeId));
  }, [dispatch]);

  return (
    <div>
      <h2>Details</h2>
    </div>
  );
}

export default Details;
