import * as React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { deleteBike } from '../../../redux/action.creators';

const DeleteButton = function DeleteButton({ _id, token }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
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
      <DeleteIcon onClick={handleDelete} />
    </Stack>

  );
};

export default DeleteButton;
