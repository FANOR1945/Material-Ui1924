import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(15),
  },
  dialogTitle: {
    justifyContent: 'center',
  },
}));
