/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBikeFromFavorite } from '../../../redux/action.creators';

const DeleteFavoriteButton = function DeleteFavoriteButton({ _id }) {
  const dispatch = useDispatch();

  const favorites = useSelector((store) => store.favorites);
  const token = useSelector((store) => store.login);

  const handleDeleteFavorite = (ev) => {
    const config = {
      headers: {
        'auth-token': token
      },
      data: {
        _id
      }
    };
    dispatch(deleteBikeFromFavorite(config));
  };

  return (
    <div>
      <button type="button" label="button" onClick={handleDeleteFavorite}>UNFAV </button>

    </div>
  );
};

export default DeleteFavoriteButton;
