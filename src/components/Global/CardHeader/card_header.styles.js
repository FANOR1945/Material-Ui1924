import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((props) => ({
  root: {
    textAlign: "center",
    background: (props) => props.color,
  },
  texto: {
    fontSize: 18,
    color: (props) => props.font,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 22,
    font: (props) => props.font,
  },
}));
