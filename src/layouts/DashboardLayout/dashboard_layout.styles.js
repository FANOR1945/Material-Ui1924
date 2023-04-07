import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minheight: '100vh',
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,

    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
  },
  content_body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
