import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  content_about_us: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  paperstyle: {
    minHeight: '30rem', //only test is removed when placing components or pages
    //border: "2px solid blue",
    borderRadius: '1rem',
    margin: theme.spacing(0.5),
    textAlign: 'center',
    padding: theme.spacing(2),
    backgroundColor: 'rgba(239, 224, 224, 0.66)',
  },
}));
