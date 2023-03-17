import { makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import background from "../../../assets/fonts/images/logo_b.png";
export const useStyles = makeStyles((theme) => ({
  layout_login: {
    width: "100%",
    justifyContent: "center",
    padding: theme.spacing(1),
  },

  paperstyle: {
    borderRadius: "1rem",
    padding: theme.spacing(1),
    backgroundImage: `url(${background})`,
  },

  align_image_text: {
    width: "17.5rem",
    height: "9rem",
  },

  logo: {
    marginBottom: "-25px",
  },

  form: { flexDirection: "column", fontSize: 14 },

  input: {
    borderRadius: "1rem",
    color: "#138D75",
    paddingTop: theme.spacing(0.5),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(0.5),
  },

  button: {
    width: "100%",
    textTransform: "none",
    marginTop: theme.spacing(1),
    paddingRight: theme.spacing(5.9),
    paddingLeft: theme.spacing(5.9),
    borderRadius: "2rem",
    alignItems: "center",
    justifyContent: "center",
  },

  typography: { fontSize: "1rem", color: "white", textAlign: "center" },

  link: {
    fontSize: "0.8rem",
    color: "white",
    textAlign: "right",
  },
}));

export const BootstrapButton = withStyles({
  root: {
    textTransform: "none",
    padding: "4px 10px",
    marginTop: "0.8rem",
    marginBottom: "0.5rem",
    border: "1px solid",
    backgroundColor: "#85929E",
    borderColor: ["#85929E"].join(","),
    "&:hover": {
      backgroundColor: "#85929E",
      borderColor: "#85929E",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#85929E",
      borderColor: "white",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #85929E",
    },
  },
})(Button);
