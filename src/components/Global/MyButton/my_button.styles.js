import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    background: (props) => props.color,

    boxShadow: (props) => props.font,
    color: (props) => props.font,
    "&:hover": {
      background: (props) => props.hover,
    },
  },
});
