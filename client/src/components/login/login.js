import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logUser } from '../../redux/action.creators';

function Login() {
  const token = useSelector((store) => store.token);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logUser());
  }, [dispatch]);

  return (
    <div>
      <h2>Login </h2>

      {console.log(token)}
    </div>
  );
}

export default Login;
