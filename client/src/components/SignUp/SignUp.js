import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { registerUser } from '../../services/user.services';

export default function SignUp() {
  const [registerState, setRegisterState] = useState({
    userName: '',
    password: '',
    email: '',
    province: '',
    phone: '',
  });

  const [buttonState, setButtonState] = useState('disabled');

  const handleSubmit = (ev) => {
    // Why do we need prevents default if here?
    ev.preventDefault();
    registerUser(registerState);
  };

  const handleChange = (evt, control) => {
    setRegisterState({ ...registerState, [control]: evt.target.value });
  };

  //   let sendPermission =
  //     registerState.userName &&
  //     registerState.password &&
  //     registerState.email &&
  //     registerState.province
  //       ? 'disabled'
  //       : 'disabled';

  //   const sendPermission = 'disabled';
  return (
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
          label="User"
          onChange={(ev) => handleChange(ev, 'userName')}
        />
        <TextField
          required
          id="outlined-required"
          label="e-mail"
          onChange={(ev) => handleChange(ev, 'email')}
        />
        <TextField
          id="outlined"
          label="phone"
          onChange={(ev) => handleChange(ev, 'phone')}
        />
        <TextField
          required
          id="outlined-required"
          label="province"
          onChange={(ev) => handleChange(ev, 'province')}
        />
        <TextField
          required
          id="outlined-password"
          label="Password"
          type="password"
          onChange={(ev) => handleChange(ev, 'password')}
        />
      </div>
      <Button variant="outlined" onClick={handleSubmit}>
        Send
      </Button>
    </Box>
  );
}
