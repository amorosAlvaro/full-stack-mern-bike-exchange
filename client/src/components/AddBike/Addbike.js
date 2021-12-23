import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import './AddBike.scss';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import { addBike } from '../../services/bike.services';
import bikeClasses from '../../assets/data/bikeClasses';

const AddBike = function AddBike() {
  const token = useSelector((store) => store.login);
  const navigate = useNavigate();

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
    change: [],
    description: '',
    image: '',
    class: ''
  });

  const handleChange = (name) => (ev) => {
    const value = name === 'image' ? ev.target.files[0] : ev.target.value;
    setBikeState({ ...bikeState, [name]: value });
  };

  const handleToggle = (option) => () => {
    const currentIndex = bikeState.change.indexOf(option);
    const newChecked = [...bikeState.change];
    if (currentIndex === -1) {
      newChecked.push(option);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setBikeState({ ...bikeState, change: newChecked });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('image', bikeState.image);
    formData.append('make', bikeState.make);
    formData.append('bike_model', bikeState.bike_model);
    formData.append('km', bikeState.km);
    formData.append('year', bikeState.year);
    formData.append('change', bikeState.change);
    formData.append('description', bikeState.description);
    formData.append('class', bikeState.class);

    const res = await addBike(formData, headers);

    if (res) {
      navigate('../bikes/owned');
    }
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
            placeholder="make-field"
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
            id="outlined-select-currency"
            select
            label="Class"
            value={bikeState.class}
            onChange={handleChange('class')}
          >
            {bikeClasses.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
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
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue="Default Value"
            value={bikeState.description}
            onChange={handleChange('description')}

          />
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#eeeeee' }}>
            {bikeClasses.map((option) => {
              const labelId = `checkbox-list-label-${option}`;

              return (
                <ListItem
                  key={option}
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(option)} dense placeholder="checkbox">
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={bikeState.change.indexOf(option) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${option}`} />
                  </ListItemButton>

                </ListItem>
              );
            })}
          </List>
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
          <Button variant="outlined" onClick={handleSubmit} placeholder="save-button">
            Save
          </Button>
        </div>
      </Box>

    </div>
  );
};

export default AddBike;
