/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import StarIcon from '@mui/icons-material/Star';
import { SvgIcon } from '@mui/material';
import { deleteBikeFromFavorite } from '../../../redux/action.creators';

const DeleteFavoriteButton = function DeleteFavoriteButton({ _id }) {
  const dispatch = useDispatch();

  const favorites = useSelector((store) => store.favorites);
  const token = useSelector((store) => store.login);

  const handleDeleteFavorite = () => {
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
    <button type="button" label="button" onClick={handleDeleteFavorite}>
      <SvgIcon component={StarIcon} />
    </button>

  );
};

export default DeleteFavoriteButton;
