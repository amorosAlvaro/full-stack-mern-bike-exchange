/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';

const Details = function Details({ details }) {
  const { loading = false } = details;

  return (
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
            {details.make}
            {' '}
            {details.bike_model}

          </span>
)}
        subheader={(
          <span>
            {item.owner.province}
            {' '}
            |
            {' '}
            {details.year}
            {' '}
            |
            {' '}
            {details.km}
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
          image={details.avatar}
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
            {details.change}
          </Typography>
        )}
      </CardContent>
    </Card>

  );
};

export default Details;
