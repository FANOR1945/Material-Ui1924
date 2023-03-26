import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
    display: 'flex',
    position: 'fixed',
    color: theme.palette.type === 'light' && theme.palette.grey[100],
    backgroundColor: theme.palette.secondary.main,
  },
  list: {
    listStyle: 'none',
  },
}));
