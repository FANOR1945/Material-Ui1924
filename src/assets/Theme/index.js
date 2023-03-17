import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import TimesNewRoman from "../fonts/TimesNewRoman-Regular.ttf";
//import Mulish from "../fonts/mulish/mulishmuliregular400.ttf";
//import Mulish from "../fonts/mulish/mulishmuliregular400.ttf";
const TimesNewRomanRegular = {
  fontFamily: "mulishmulibold700",
  fontStyle: "normal",
  fontWeight: 200,
  src: `url(${TimesNewRoman})`,
};
const theme = createTheme({
  typography: {
    fontFamily: [TimesNewRomanRegular.fontFamily].join(","),
  },
  palette: {
    primary: {
      main: "#F7F8FC",
    },
    secondary: {
      main: "#FFFFFF",
    },
    third: {
      main: "#BFACE0",
    },
    fourth: {
      main: "#EBC7E8",
    },
    avatar: {
      avatarS: "#3751FF",
    },
    button: {
      buttonS: "#3751FF",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [TimesNewRomanRegular],
      },
      body: {
        fontFamily: ["mulishmuliregular400"],
      },
      "h1, h2, h3, h4, h5, h6": {
        margin: 0,
        padding: 0,
      },
    },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
export default Theme;
