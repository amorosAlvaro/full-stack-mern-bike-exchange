/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
import { addBikeToFavorite, deleteBikeFromFavorite } from '../../../services/bike.services';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const FavoriteButton = function FavoriteButton({ _id, token }) {
  const handleAddFavorite = (ev) => {
    ev.preventDefault();

    const headers = {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    };

    const data = {
      _id
    };

    addBikeToFavorite(data, headers);
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
