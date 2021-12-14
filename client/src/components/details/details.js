import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '../common/List/List';
import { loadBikeById } from '../../redux/action.creators';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const Details = function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const bikes = useSelector((store) => store.bikes);
  console.log({ bikes });
  // eslint-disable-next-line no-unused-vars
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
        <List list={bikes} type="details" />
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Item>{`Owner: ${bikes[0].owner.name} ${bikes[0].owner.surname}`}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>{`Province: ${bikes[0].owner.province}`}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>{`${bikes[0].owner.phone}`}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>{`${bikes[0].owner.email}`}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>{`${bikes[0].description}`}</Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </>
  );
};

export default Details;
