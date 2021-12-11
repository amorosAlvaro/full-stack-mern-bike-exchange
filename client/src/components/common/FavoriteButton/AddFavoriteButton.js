/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBikeToFavorite } from '../../../redux/action.creators';

const AddFavoriteButton = function AddFavoriteButton({ _id }) {
  const dispatch = useDispatch();

  const favorites = useSelector((store) => store.favorites);
  const token = useSelector((store) => store.login);

  const handleAddFavorite = (ev) => {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    };

    const bikeId = {
      _id
    };

    dispatch(addBikeToFavorite(bikeId, headers));
  };

  return (
    <div>
      <button type="button" label="button" onClick={handleAddFavorite}>FAV </button>
    </div>
  );
};

export default AddFavoriteButton;
