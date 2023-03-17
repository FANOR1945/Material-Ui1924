import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  content_footer: {
    border: "1px solid red",
    width: "100%",
  },

  paperstyle: {
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid orange",
    width: "100%",
    padding: theme.spacing(1),
  },
}));
