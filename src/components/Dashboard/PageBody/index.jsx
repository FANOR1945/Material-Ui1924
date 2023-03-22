import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './page_body.styles';
const PageBody = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.page_body}>{children}</Box>;
};

export default PageBody;
