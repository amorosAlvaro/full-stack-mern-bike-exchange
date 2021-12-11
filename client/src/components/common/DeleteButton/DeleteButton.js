/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteBike } from '../../../services/bike.services';
import { deleteBike } from '../../../redux/action.creators';

const DeleteButton = function DeleteButton({ _id, token }) {
  const dispatch = useDispatch();
  // const token = useSelector((store) => store.login);
  // const headers = {
  //   headers: {
  //     'auth-token': token
  //   }
  // };

  const handleDelete = (ev) => {
    ev.preventDefault();
    const config = {
      headers: {
        'auth-token': token
      },
      data: {
        _id
      }
    };
    console.log(config);
    dispatch(deleteBike(config));
  };

  //   const print = () => {
  //     console.log(headers);
  //     console.log(_id);
  //   };

  return (

    <Stack direction="row" spacing={2}>
      <IconButton aria-label="delete" size="large" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Stack>

  );
};

export default DeleteButton;
