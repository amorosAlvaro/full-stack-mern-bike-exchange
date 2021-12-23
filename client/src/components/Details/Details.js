import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '../common/Card/Card';
import { loadBikeById } from '../../redux/action.creators';
import './Details.scss';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: '1.2rem'
}));

const Details = function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const bikes = useSelector((store) => store.bikes);
  const bike = bikes.filter((element) => element._id === id);

  useEffect(() => {
    dispatch(loadBikeById(bike));
  }, [dispatch]);

  return (
    <>
      <div>
        <h2>Details</h2>
      </div>
      <div>
        <Card list={bikes} type="details" />
      </div>
      <Box sx={{
        flexGrow: 1, display: 'flex', flexDirection: 'col', alignItems: 'flex-start'
      }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="owner-data">
            <Grid item xs={6}>
              <Item className="owner-data__item">{`Owner: ${bikes[0].owner.name} ${bikes[0].owner.surname}`}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="owner-data__item">{`Province: ${bikes[0].owner.province}`}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="owner-data__item">{`${bikes[0].owner.phone}`}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="owner-data__item">{`${bikes[0].owner.email}`}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item className="owner-data__item">{`${bikes[0].description}`}</Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </>
  );
};

export default Details;
