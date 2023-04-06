import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  content_seeds_ours: {
    flexDirection: 'row',
  },
  content_layout: {
    // border: "2px solid red",
    //  marginTop: "5rem",
  },
  paperstyle: {
    //Solucionar grid responsive apaper hidden
    minHeight: '30rem', //only test is removed when placing components or pages
    //border: "2px solid blue",
    borderRadius: '1rem',
    margin: theme.spacing(0.5),
    textAlign: 'center',
    padding: theme.spacing(2),
    backgroundColor: 'rgba(249, 235, 234)',
  },
}));
