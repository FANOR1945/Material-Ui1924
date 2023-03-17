import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    background: (props) => props.color,

    boxShadow: (props) => props.color,
    color: (props) => props.font,
  },
});
