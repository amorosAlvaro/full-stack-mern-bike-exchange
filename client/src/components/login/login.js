import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logUser, logOutUser } from '../../redux/action.creators';

function Login() {
  // I AM NOT SURE IF I NEED THIS HERE, I DONT THINK SO
  // const token = useSelector((store) => store.login);

  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState({ userName: '', password: '' });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(logUser(loginState));
  };

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  const handleChange = (evt, control) => {
    setLoginState({ ...loginState, [control]: evt.target.value });
  };

  return (
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
      <button type="register" onClick={handleLogout}>
        Register
      </button>
    </form>
  );
}

export default Login;
