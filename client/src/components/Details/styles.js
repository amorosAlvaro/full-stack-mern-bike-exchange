import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: '1.2rem',
  border: '1rem',
  width: 335
}));

const GridOwnerData = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  padding: '0.4rem'
});

export { Item, GridOwnerData };
