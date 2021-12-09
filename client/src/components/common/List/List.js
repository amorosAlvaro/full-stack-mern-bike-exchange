/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import { loadBikes } from '../../redux/action.creators';

const MotoList = function MotoList({ list, type }) {
  const { loading = false } = props;

  const dispatch = useDispatch();

  const bikes = useSelector((store) => store.bikes);

  useEffect(() => {
    dispatch(loadBikes());
  }, [dispatch]);
  console.log(bikes);

  return (
    <ImageList cols={1}>
      {bikes.map((item) => (
        <Card>
          <CardHeader
            action={
            loading ? null : (
              <IconButton aria-label="settings">
                <MoreVertIcon />
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

export default MotoList;
