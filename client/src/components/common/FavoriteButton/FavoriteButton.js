/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import DeleteFavoriteButton from './DeleteFavoriteButton';
import AddFavoriteButton from './AddFavoriteButton';

const FavoriteButton = function FavoriteButton({ _id }) {
  const favorites = useSelector((store) => store.favorites);

  const check = (element) => element._id === _id;

  return (
    <div className="favoriteIcon">
      {favorites.some(check) ? <DeleteFavoriteButton _id={_id} /> : <AddFavoriteButton _id={_id} /> }
    </div>

  );
};

export default FavoriteButton;
