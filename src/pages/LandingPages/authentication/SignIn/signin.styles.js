import { makeStyles } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import background from '../../../../assets/fonts/images/logo_b.png';
export const useStyles = makeStyles((theme) => ({
  layout_login: {
    justifyContent: 'center',
    padding: theme.spacing(6),
  },

  paperstyle: {
    borderRadius: '1rem',
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundImage: `url(${background})`,
  },

  align_image_form: {
    width: '15rem',
    marginBottom: '2rem',
  },

  logo: {
    marginBottom: '-25px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    borderRadius: '1rem',
    color: '#138D75',
    marginBottom: '0.6rem',
    marginRight: '-3rem',
    marginLeft: '-3rem',
    padding: theme.spacing(0.6),
  },

  button: {
    width: '70%',
    textTransform: 'none',
    marginBottom: '0.6rem',
    borderRadius: '2rem',
    backgroundColor: '#138D75',
    color: 'white',
    '&:hover': {
      backgroundColor: '#138D75',

      color: 'white',
    },
  },
  link: {
    fontSize: '0.8rem',
    color: 'white',
    cursor: 'pointer',
  },
  typography: { fontSize: '1rem', color: 'white', textAlign: 'center' },
}));
