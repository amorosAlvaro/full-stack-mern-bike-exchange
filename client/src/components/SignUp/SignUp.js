import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/user.services';

import './SignUp.scss';

const SingUp = function SignUp() {
  const navigate = useNavigate();

  const [registerState, setRegisterState] = useState({
    userName: '',
    password: '',
    email: '',
    province: '',
    phone: '',
    name: '',
    surname: ''
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    registerUser(registerState);
    navigate('../login');
  };

  const handleChange = (evt, control) => {
    setRegisterState({ ...registerState, [control]: evt.target.value });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <div className="signup-grid">
        <TextField
          placeholder="User Name"
          required
          id="outlined-required"
          label="User Name"
          onChange={(ev) => handleChange(ev, 'userName')}
        />
        <TextField
          placeholder="Name"
          required
          id="outlined-required"
          label="Name"
          onChange={(ev) => handleChange(ev, 'name')}
        />
        <TextField
          placeholder="Surname"
          required
          id="outlined-required"
          label="Surname"
          onChange={(ev) => handleChange(ev, 'surname')}
        />
        <TextField
          placeholder="mail"
          required
          id="outlined-required"
          label="e-mail"
          onChange={(ev) => handleChange(ev, 'email')}
        />
        <TextField
          placeholder="phone"
          id="outlined"
          label="phone"
          onChange={(ev) => handleChange(ev, 'phone')}
        />
        <TextField
          placeholder="Province"
          required
          id="outlined-required"
          label="province"
          onChange={(ev) => handleChange(ev, 'province')}
        />
        <TextField
          placeholder="Password"
          required
          id="outlined-password"
          label="Password"
          type="password"
          onChange={(ev) => handleChange(ev, 'password')}
        />
        <Button variant="outlined" onClick={handleSubmit}>
          Send
        </Button>
      </div>

    </Box>
  );
};

export default SingUp;
