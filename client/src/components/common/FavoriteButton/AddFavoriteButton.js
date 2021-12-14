/* eslint-disable no-unused-expressions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SvgIcon } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { addBikeToFavorite } from '../../../redux/action.creators';

const AddFavoriteButton = function AddFavoriteButton({ _id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((store) => store.login);

  const handleAddFavorite = () => {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    };

    const bikeId = {
      _id
    };

    token ? dispatch(addBikeToFavorite(bikeId, headers)) : navigate('../login');
  };

  return (

    <SvgIcon component={StarBorderIcon} onClick={handleAddFavorite} />
  );
};

export default AddFavoriteButton;
