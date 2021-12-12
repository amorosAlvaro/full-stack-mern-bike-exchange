/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import StarIcon from '@mui/icons-material/Star';
import { SvgIcon } from '@mui/material';
import { deleteBikeFromFavorite } from '../../../redux/action.creators';

const DeleteFavoriteButton = function DeleteFavoriteButton({ _id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    token ? dispatch(deleteBikeFromFavorite(config)) : navigate(-1);
  };

  return (
    <button type="button" label="button" onClick={handleDeleteFavorite}>
      <SvgIcon component={StarIcon} />
    </button>

  );
};

export default DeleteFavoriteButton;
