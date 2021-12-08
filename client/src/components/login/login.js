import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logUser, logOutUser } from '../../redux/action.creators';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  // I AM NOT SURE IF I NEED THIS HERE, I DONT THINK SO
  // const token = useSelector((store) => store.login);

  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState({ userName: '', password: '' });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(logUser(loginState));
  };

  const handleChange = (evt, control) => {
    setLoginState({ ...loginState, [control]: evt.target.value });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          onChange={(ev) => handleChange(ev, 'userName')}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          onChange={(ev) => handleChange(ev, 'password')}
        />
      </div>
      <div>
        <Button variant="outlined" onClick={handleSubmit}>
          Login
        </Button>
        <Link to="/register">
          <Button variant="outlined">SignUp</Button>
        </Link>
      </div>
      {/* 
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user-name">Name</label>
          <input
            type="text"
            className="form-control"
            name="user-name"
            id="user-name"
            value={loginState.userName}
            required
            onChange={(ev) => handleChange(ev, 'userName')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="user-password">Password</label>
          <input
            type="password"
            className="form-control"
            name="user-password"
            id="user-password"
            value={loginState.password}
            required
            onChange={(ev) => handleChange(ev, 'password')}
          />
        </div>
        <button type="submit">Login</button>
        <button type="reset" onClick={handleLogout}>
          Logout
        </button>
        <Link to="/register">
          <button type="register" onClick={handleLogout}>
            SignUp
          </button>
        </Link>
      </form> */}
    </>
  );
}

export default Login;
