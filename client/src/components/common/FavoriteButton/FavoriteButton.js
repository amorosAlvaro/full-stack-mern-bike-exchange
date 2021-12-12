/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import DeleteFavoriteButton from './DeleteFavoriteButton';
import AddFavoriteButton from './AddFavoriteButton';

const FavoriteButton = function FavoriteButton({ _id }) {
  const favorites = useSelector((store) => store.favorites);

  // const token = useSelector((store) => store.login);
  // TODO a delete favorites from state when no token
  // token ? dispatch(deleteBikeFromFavorite(config)) : navigate(-1);

  const check = (element) => element._id === _id;

  return (
    <div>
      {favorites.some(check) ? <DeleteFavoriteButton _id={_id} /> : <AddFavoriteButton _id={_id} /> }
    </div>

  );
};

export default FavoriteButton;
