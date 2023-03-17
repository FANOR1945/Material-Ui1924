import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    layout_content: {
        width: "100%",
        justifyContent: "center",
        padding: theme.spacing(1),
      },
  content_card: {
    padding: theme.spacing(4),
  },
}));
