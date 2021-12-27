import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '../common/Card/Card';
import { loadBikeById } from '../../redux/action.creators';
import { Item, GridOwnerData } from './styles';

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
      <h2>Details</h2>
      <Card list={bikes} type="details" />
      <Box>
        <Grid>
          <GridOwnerData>
            <Item>{`${bikes[0].owner.name} ${bikes[0].owner.surname}`}</Item>
          </GridOwnerData>
          <GridOwnerData>
            <Item>{` ${bikes[0].owner.province}`}</Item>
          </GridOwnerData>
          <GridOwnerData>
            <Item>{` ${bikes[0].owner.phone}`}</Item>
          </GridOwnerData>
          <GridOwnerData>
            <Item>{`${bikes[0].owner.email}`}</Item>
          </GridOwnerData>
          <GridOwnerData>
            <Item>{`${bikes[0].description}`}</Item>
          </GridOwnerData>
        </Grid>
      </Box>
    </>
  );
};

export default Details;
