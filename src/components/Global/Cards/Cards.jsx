import React, { Children } from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import { useStyles } from './cards.styles';

const Cards = ({ titulo, texto, children, className }) => {
  const classes = useStyles();
  return (
    <Card className={`${className}`}>
      <CardContent>
        <Typography className={classes.titulo}>{titulo}</Typography>

        {children}
        <Typography className={classes.texto}>{texto}</Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
