import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { addBike } from '../../../services/bike.services';
import axios from 'axios';

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
    image: '',
  });

  // const handleChange = (name) => (e) => {
  //   const value = name === 'image' ? e.target.files[0] : e.target.value;
  //   setBikeState({ ...bikeState, [name]: value });
  // };

  // const value = name === 'image' ? e.target.files[0] : e.target.value;

  const handleChange = (name) => (ev) => {
    const value = name === 'image' ? ev.target.files[0] : ev.target.value;
    console.log(ev);
    setBikeState({ ...bikeState, [name]: value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      let formData = new FormData();
      formData.append('image', bikeState.image);
      formData.append('make', bikeState.make);

      const res = await fetch(`http://localhost:3030/bikes/owned`, {
        method: 'POST',
        body: formData,
        headers: {
          'auth-token': token,
        },
      });
      if (res.ok) {
        setBikeState({
          make: '',
          bike_model: '',
          km: '',
          year: '',
          change: '',
          image: '',
        });
      }
    } catch (error) {
      console.log('error in fetch');
    }
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
            value={bikeState.make}
            onChange={handleChange('make')}
          />
          <TextField
            id="outlined-required"
            label="Model"
            value={bikeState.bike_model}
            onChange={handleChange('bike_model')}
          />
          <TextField
            id="outlined"
            label="km"
            type="number"
            value={bikeState.km}
            onChange={handleChange('km')}
          />
          <TextField
            id="outlined-required"
            label="Year"
            type="number"
            value={bikeState.number}
            onChange={handleChange('year')}
          />
          <TextField
            id="outlined-password"
            label="Change"
            value={bikeState.change}
            onChange={handleChange('change')}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange('image')}
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
