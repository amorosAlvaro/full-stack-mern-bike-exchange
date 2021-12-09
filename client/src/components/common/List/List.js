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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import { useSelector, useDispatch } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const List = function List({ list, type }) {
  const { loading = false } = list;

  const token = useSelector((store) => store.login);
  let headers;
  if (token) {
    headers = {
      headers: {
        'auth-token': token
      }
    };
  }

  return (
    <ImageList cols={1}>
      {list.map((item) => (
        <Card>
          <CardHeader
            action={
            loading ? null : (
              <IconButton aria-label="settings">
                { (type === 'owned') ? <DeleteButton _id={item._id} headers={headers} /> : <FavoriteButton _id={item._id} headers={headers} /> }
              </IconButton>
            )
          }
            title={(
              <span>
                {' '}
                {item.make}
                {' '}
                {item.bike_model}

              </span>
)}
            subheader={(
              <span>
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
          {loading ? (
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image={item.avatar}
              alt="Nicola Sturgeon on a TED talk stage"
            />
          )}

          <CardContent>
            {loading ? (
              <>
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={10} width="80%" />
              </>
            ) : (
              <Typography variant="body2" color="text.secondary" component="p">
                {item.change}
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </ImageList>
  );
};

export default List;
