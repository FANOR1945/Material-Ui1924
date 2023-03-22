import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    display: 'flex',
  },
  headerTitle: {
    fontWeight: 400,
    marginRight: theme.spacing(2),
  },
}));
