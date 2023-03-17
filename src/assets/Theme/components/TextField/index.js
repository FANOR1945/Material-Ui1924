import { alpha, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

export const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,

    backgroundColor: theme.palette.common.white,
    border: "2px solid #ced4da",
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(0.4),
    paddingRight: theme.spacing(0.4),
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: ["Poppins"].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);
