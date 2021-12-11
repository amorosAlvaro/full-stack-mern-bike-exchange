import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SvgIcon } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { addBikeToFavorite } from '../../../redux/action.creators';

const AddFavoriteButton = function AddFavoriteButton({ _id }) {
  const dispatch = useDispatch();

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

    dispatch(addBikeToFavorite(bikeId, headers));
  };

  return (
    <button type="button" label="button" onClick={handleAddFavorite}>
      <SvgIcon component={StarBorderIcon} />
    </button>

  );
};

export default AddFavoriteButton;
