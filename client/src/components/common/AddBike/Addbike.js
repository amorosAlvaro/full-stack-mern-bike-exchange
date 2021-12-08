import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { addBike } from '../../../services/bike.services';

function AddBike() {
  const token = useSelector((store) => store.login);

  const headers = {
    headers: {
      'auth-token': token,
    },
  };

  const [bikeState, setBikeState] = useState({
    make: '',
    bike_model: '',
    km: '',
    year: '',
    change: '',
    pictures: [],
  });

  const handleChange = (evt, control) => {
    setBikeState({ ...bikeState, [control]: evt.target.value });
  };

  const handleSubmit = (ev) => {
    // Why do we need prevents default if here?
    console.log(headers);
    ev.preventDefault();
    addBike(bikeState, headers);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Make"
            onChange={(ev) => handleChange(ev, 'make')}
          />
          <TextField
            id="outlined-required"
            label="Model"
            onChange={(ev) => handleChange(ev, 'bike_model')}
          />
          <TextField
            id="outlined"
            label="Km"
            type="number"
            onChange={(ev) => handleChange(ev, 'km')}
          />
          <TextField
            id="outlined-required"
            label="Year"
            type="number"
            onChange={(ev) => handleChange(ev, 'year')}
          />
          <TextField
            id="outlined-password"
            label="Change for"
            onChange={(ev) => handleChange(ev, 'change')}
          />
        </div>
        <Button variant="outlined" onClick={handleSubmit}>
          Save
        </Button>
      </Box>
    </div>
  );
}

export default AddBike;
