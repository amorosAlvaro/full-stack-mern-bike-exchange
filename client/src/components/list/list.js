import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBikes } from '../../redux/action.creators';

function List() {
  const bikes = useSelector((store) => store.bikes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBikes());
  }, []);

  return (
    <div>
      <h2>Bikes</h2>
      <div className="bikes">
        {bikes.map((bike) => (
          <div className="bikes__bike" key={bike._id}>
            {bike.make}
            {console.log(bikes)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
