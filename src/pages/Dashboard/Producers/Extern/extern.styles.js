import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  content_body: {
    border: '1px solid blue',
    width: '100%',
    textAlign: 'center',
  },

  button: {
    width: '6rem',
    height: 30,
    borderRadius: '3rem',
  },

  table: {
    minWidth: 700,
  },
}));
