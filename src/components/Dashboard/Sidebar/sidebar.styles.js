import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {

    top: 5,
    right: 5,
  },
  drawer: {
    width: 250,
  },
  drawerItem: {
    padding: 15,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
