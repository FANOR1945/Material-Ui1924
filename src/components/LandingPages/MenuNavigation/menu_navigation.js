import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
  button_nav: {
    width: "100%",

    padding: theme.spacing(2),
  },
  tittle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    lineHeight: "1.875rem",
    color: "#1B2631",
  },
}));

export const defaultProps = {
  bgcolor: "background.paper",
  m: 4,
  border: 10,
  style: { width: "2", height: "2rem" },
  borderColor: "text.primary",
};
