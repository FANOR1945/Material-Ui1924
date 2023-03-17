import React from "react";
import { TextField } from "@material-ui/core";
import { useStylesReddit } from "./my_textfield.styles";
const MyTextField = ({ children, className, ...props }) => {
  const { color, ...other } = props;
  const classes = useStylesReddit(props);

  return (
    <>
      <TextField
        InputProps={{
          classes,
          disableUnderline: true,
          color,
          ...other,
          className,
        }}
        {...props}
      >
        {" "}
        {children}
      </TextField>
      ;
    </>
  );
};
export default MyTextField;
