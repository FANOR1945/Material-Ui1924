import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,

  content: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
  },
}));
