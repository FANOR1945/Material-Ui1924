import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./my_button.styles";
const MyButton = ({ children, className, ...props }) => {
  const { color, ...other } = props;
  const { root } = useStyles(props);
  return (
    <Button className={`${className} ${root} ${other}`}>{children}</Button>
  );
};
export default MyButton;
