import React from "react";
import { Card } from "@material-ui/core";
import { useStyles } from "./my_card.styles";
const MyCard = ({ children, className, ...props }) => {
  const { color, ...other } = props;
  const { root } = useStyles(props);
  return <Card className={`${className} ${root} ${other}`}>{children}</Card>;
};
export default MyCard;
