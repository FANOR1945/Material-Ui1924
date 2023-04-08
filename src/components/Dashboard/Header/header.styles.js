import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
  },
  tittle: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    width: '5rem',
    height: 30,
    borderRadius: '3rem',
  },
}));
