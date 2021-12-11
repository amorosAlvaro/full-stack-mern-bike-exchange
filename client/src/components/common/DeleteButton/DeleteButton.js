import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { deleteBike } from '../../../redux/action.creators';

const DeleteButton = function DeleteButton({ _id, token }) {
  const dispatch = useDispatch();

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
    dispatch(deleteBike(config));
  };

  return (

    <Stack direction="row" spacing={2}>
      <IconButton aria-label="delete" size="large" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Stack>

  );
};

export default DeleteButton;
