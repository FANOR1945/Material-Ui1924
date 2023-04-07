import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  content_header: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2.5),
    flexDirection: 'column',
  },
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
