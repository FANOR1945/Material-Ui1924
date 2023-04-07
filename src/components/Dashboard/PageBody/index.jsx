import React from 'react';
import { Content } from '../../Global';
import { useStyles } from './page_body.styles';
const PageBody = ({ children }) => {
  const classes = useStyles();
  return <Content className={classes.page_body}>{children}</Content>;
};

export default PageBody;
