import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { logUser } from '../../redux/action.creators';

import './Login.scss';

// ADD: If correct password, redirect to home, if not, display message

const Login = function Login() {
  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState({ userName: '', password: '' });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(logUser(loginState));
  };

  const handleChange = (evt, control) => {
    setLoginState({ ...loginState, [control]: evt.target.value });
  };

  // if (loginState.userName && loginState.password) {
  //   console.log();
  // }

  // const buttonState = 'disabled';
  // console.log(buttonState);
  return (
    <div className="login-gird">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' }
        }}
        noValidate
        autoComplete="off"
      />
      <div className="login-gird--text">
        <TextField
          required
          className="login-gird--text__field"
          label="Name"
          onChange={(ev) => handleChange(ev, 'userName')}
        />
        <TextField
          required
          className="login-gird--text__field"
          label="Password"
          type="password"
          onChange={(ev) => handleChange(ev, 'password')}
        />
      </div>
      <div className="login-gird  --button">
        <Button
          variant="outlined"
          onClick={handleSubmit}
          className="login-grid--button__field"
        >
          Login
        </Button>
        <Link to="/register">
          <Button
            variant="outlined"
            className="login-grid--button__field"
          >
            SignUp

          </Button>
        </Link>
      </div>

    </div>
  );
};

export default Login;
