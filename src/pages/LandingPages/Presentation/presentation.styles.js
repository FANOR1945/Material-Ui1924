import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  button: {
    width: '15rem',
    height: 48,
    borderRadius: '3rem',
  },
  input: {
    width: '15rem',
    height: 48,
    borderRadius: '3rem',
    color: 'white',
    padding: theme.spacing(1),
  },
}));
