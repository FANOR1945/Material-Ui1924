import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(3),
    '& thead th': {
      fontWeight: '600',
      backgroundColor: 'transparent',
      backgroundColor: theme.palette.primary.light,
    },
    '& tbody td': {
      fontWeight: '300',
      
    },
    '& tbody tr:hover': {
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
  },
}));
