import { makeStyles } from "@material-ui/core/styles";

export const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    backgroundColor: (props) => props.color,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      background: (props) => props.color,
    },
    "&$focused": {
      backgroundColor: (props) => props.colort,
      boxShadow: (props) => props.font,
      borderColor: theme.palette.primary.main,
    },
  },

}));
