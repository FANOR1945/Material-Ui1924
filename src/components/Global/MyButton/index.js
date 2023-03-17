import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: (props) => props.color,
    border: 0,
    boxShadow: (props) => props.color,
    color: (props) => props.font,
  },
});

const MyButton = ({ children, className, ...props }) => {
  const { color, ...other } = props;
  const { root } = useStyles(props);
  return (
    <Button className={`${className} ${root} ${other}`}>{children}</Button>
  );
};
export default MyButton;
