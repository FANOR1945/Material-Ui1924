import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: (props) => props.color,
    border: "1px solid #e2e2e1",
    boxShadow: (props) => props.font,
  },
}));
