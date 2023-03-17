import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  page_layout: {
    flexDirection: "column",
    paddingTop: theme.spacing(3),
    marginTop: "10.5rem",
    width: "100%", //important content
    justifyContent: "space-between",
    backgroundColor: "#9fa4a0",
  },
}));
