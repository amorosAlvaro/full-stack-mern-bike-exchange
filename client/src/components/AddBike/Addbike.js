import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { addBike } from '../../services/bike.services';
import './AddBike.scss';

const AddBike = function AddBike() {
  const token = useSelector((store) => store.login);

  const headers = {
    headers: {
      'auth-token': token
    }
  };

  const [bikeState, setBikeState] = useState({
    make: '',
    bike_model: '',
    km: '',
    year: '',
    change: '',
    image: ''
  });

  const handleChange = (name) => (ev) => {
    const value = name === 'image' ? ev.target.files[0] : ev.target.value;
    setBikeState({ ...bikeState, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const formData = new FormData();
    formData.append('image', bikeState.image);
    formData.append('make', bikeState.make);
    formData.append('bike_model', bikeState.bike_model);
    formData.append('km', bikeState.km);
    formData.append('year', bikeState.year);
    formData.append('change', bikeState.change);
    console.log(headers);

    addBike(formData, headers);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' }
        }}
        noValidate
        autoComplete="off"
      >
        <div className="addbike-grid">
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
          {' '}
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
        </div>

      </Box>
    </div>
  );
};

export default AddBike;
