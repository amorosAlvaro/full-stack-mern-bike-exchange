/* eslint-disable for-direction */
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
import { loadFavoriteBikes, addBikeToFavorite, deleteBikeFromFavorite } from '../../../redux/action.creators';
import DeleteFavoriteButton from './DeleteFavoriteButton';
import AddFavoriteButton from './AddFavoriteButton';

// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const FavoriteButton = function FavoriteButton({ _id, token }) {
  const dispatch = useDispatch();

  const favorites = useSelector((store) => store.favorites);

  const check = (element) => element._id === _id;

  useEffect(() => {
  }, [dispatch]);

  return (
    <div>
      {favorites.some(check) ? <DeleteFavoriteButton _id={_id} /> : <AddFavoriteButton _id={_id} /> }
    </div>

  );
};

export default FavoriteButton;
