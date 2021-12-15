/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React from 'react';
import ImageList from '@mui/material/ImageList';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteButton from '../DeleteButton/DeleteButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

import './List.scss';

const List = function List({ list, type }) {
  const token = useSelector((store) => store.login);

  return (
    <ImageList cols={1} className="bike-list">
      {list.map((item) => (
        <Card key={item._id} sx={{ width: 335, m: 2 }}>
          <CardHeader
            action={(
              <IconButton aria-label="settings">
                { (type === 'owned') ? <DeleteButton _id={item._id} token={token} /> : <FavoriteButton _id={item._id} token={token} /> }
              </IconButton>
            )}
            title={(
              <span>
                {' '}
                {item.make}
                {' '}
                {item.bike_model}

              </span>
)}
            subheader={(
              <span className="subheader">
                {item.owner.province}
                {' '}
                |
                {' '}
                {item.year}
                {' '}
                |
                {' '}
                {item.km}
                km
              </span>
)}
          />
          <Link className="recipes-nav__link" to={`/details/${item._id}`}>
            <CardMedia
              component="img"
              height="140"
              image={item.avatar}
              alt="Nicola Sturgeon on a TED talk stage"
            />
          </Link>

          <CardContent>

            <Typography variant="body2" color="text.secondary" component="p" className="description" sx={{ fontSize: 12 }}>
              {item.change}
            </Typography>

          </CardContent>

        </Card>
      ))}
    </ImageList>
  );
};

export default List;
