import { makeStyles } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import background from '../../../../assets/fonts/images/logo_b.png';
export const useStyles = makeStyles((theme) => ({
  layout_login: {
    justifyContent: 'center',
    padding: theme.spacing(5),
    border: '2px solid red',
  },

  paperstyle: {
    borderRadius: '1rem',
    padding: theme.spacing(1),
    backgroundImage: `url(${background})`,
    border: '2px solid red',
  },

  align_image_form: {
    width: '15rem',
    marginBottom: '2rem',
    justifyContent: 'center',
    border: '2px solid red',
  },

  logo: {
    marginBottom: '-25px',
  },
  form: {
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    border: '2px solid red',
  },

  input: {
    borderRadius: '1rem',
    color: '#138D75',
    marginBottom: '0.6rem',
    padding: theme.spacing(0.6),
  },

  button: {
    width: '80%',
    textTransform: 'none',
    marginBottom: '0.6rem',
    borderRadius: '2rem',
  },
  link: {
    fontSize: '0.8rem',
    color: 'white',
    cursor: 'pointer',
  },
  typography: { fontSize: '1rem', color: 'white', textAlign: 'center' },
}));
export const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '2px 15px',

    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#ffa420',
    borderColor: '#ffa420',
    fontFamily: ['Roboto'].join(','),
    '&:hover': {
      backgroundColor: '#ffa420',
      borderColor: '#ffa420',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ffa420',
      borderColor: '#ffa420',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #ffa420',
    },
  },
})(Button);
