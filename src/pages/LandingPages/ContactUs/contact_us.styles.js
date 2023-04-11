import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  layout_card: {
    width: "100%",

    padding: theme.spacing(1),
  },
  content_card: { flexDirection: "row" },
}));
