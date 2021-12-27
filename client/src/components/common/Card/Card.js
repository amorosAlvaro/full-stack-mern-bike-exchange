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

const List = function List({ list, type }) {
  const token = useSelector((store) => store.login);

  return (
    <ImageList cols={1}>
      {list.map((item) => (
        <Card key={item._id} sx={{ width: 335, m: 2 }}>
          <CardHeader
            action={(
              <IconButton aria-label="settings">
                { (type === 'owned') ? <DeleteButton _id={item._id} token={token} /> : <FavoriteButton _id={item._id} token={token} /> }
              </IconButton>
            )}
            title={(
              <Typography color="text.secondary" sx={{ fontSize: '1.8rem' }}>
                {item.make}
                {' '}
                {item.bike_model}
              </Typography>

)}
            subheader={(
              <Typography color="text.secondary" sx={{ fontSize: '1.2rem' }}>
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
              </Typography>
)}
          />
          <Link to={`/details/${item._id}`}>
            <CardMedia
              component="img"
              height="140"
              image={item.avatar}
              alt="Motorbike picture"
            />
          </Link>
          <CardContent>
            <Typography color="text.secondary" sx={{ fontSize: '1.5rem' }}>
              {item.change}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </ImageList>
  );
};

export default List;
