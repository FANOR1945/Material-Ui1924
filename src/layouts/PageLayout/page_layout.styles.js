import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  page_layout: {
    flexDirection: "column",
    padding1: theme.spacing(1),
    marginTop: "12rem",
    width: "100%", //important content
    backgroundColor: "#9fa4a0",
    justifyCcontent: "space-between",
  },
}));
