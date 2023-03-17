import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import { useStyles } from "./card_header.styles";

const CardHeader = (props) => {
  const classes = useStyles(props);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.titulo}>{props.titulo}</Typography>

        <Typography className={classes.texto}>{props.texto}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardHeader;
