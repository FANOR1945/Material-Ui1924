import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  content_appbar: {
    position: "fixed",
    backgroundImage:
      "radial-gradient(circle at center, rgb(181, 242, 204) 2.00%,rgb(4, 45, 51) 100.00%)",
  },
  griditems: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2.5),
  },
  menu_landing_pages: {
    marginRight: "6rem",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
  },
  tittle: {
    marginLeft: "0.7rem",
    marginRight: "0.73rem",
    fontSize: "1.2rem",
    fontWeight: "600",
    lineHeight: "1.875rem",
    color: "#1B2631",

    transition: "0.3s",
    "&:hover": {
      color: "#ffffff",
      "&:hover": {
        color: "#e8eb8b",
      },
    },
  },
  icon_bottom: {
    height: "4rem",
    width: "4rem",
    color: "white",
  },
  image_logo: {
    width: "10rem",
    height: "5rem",
  },

  image_signin: { width: "4rem", height: "4rem" },
  navlink: {
    fontStyle: "normal",
    fontWeight: "700",
    fontFamily: "Poppins",
    fontSize: "40px",
    color: "rgb(232, 225, 225)",
    textDecoration: "none",
  },
}));
