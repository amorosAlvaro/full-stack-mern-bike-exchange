/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { loadFavoriteBikes, addBikeToFavorite } from '../../../redux/action.creators';

// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
import { deleteBikeFromFavorite } from '../../../services/bike.services';
import actionTypes from '../../../redux/action.types';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const FavoriteButton = function FavoriteButton({ _id, token }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.ADD_TO_FAVORITES });
  }, []);

  const favoriteBikes = useSelector((store) => store.favorites);

  const handleAddFavorite = (ev) => {
    ev.preventDefault();

    const headers = {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    };

    const bikeId = {
      _id
    };

    addBikeToFavorite(bikeId, headers);
  };
  const handleDeleteFavorite = (ev) => {
    ev.preventDefault();

    const config = {
      headers: {
        'auth-token': token
      },
      data: {
        _id
      }
    };

    deleteBikeFromFavorite(config);
  };

  return (
    <>
      <div>
        {/* <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /> */}
        <button type="button" label="button" onClick={handleAddFavorite}>FAV </button>
      </div>
      <div>
        {' '}
      </div>
      <div />
      <section>
        <div>
          <button type="button" label="button" onClick={handleDeleteFavorite}>UNFAV </button>

        </div>
      </section>

    </>
  );
};

export default FavoriteButton;
