
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  page_body: {
    padding: theme.spacing(2),
    flex: 1,
    overflow: 'auto',
    backgroundColor: theme.palette.background.default,
  },
}));
