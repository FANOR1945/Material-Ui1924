import React from 'react';

import { Grid } from '@material-ui/core';
import { Content } from '../../Global';
import CardHeader from '../../Global/CardHeader';
import { useStyles } from './footer.styles';
const Footer = () => {
  const classes = useStyles();
  return (
    <Content className={classes.content_footer}>
      <Grid
        item
        xs={12}
      >
        <CardHeader
          titulo='Fanor'
          texto='Choque Aguirre'
          color='#088892 '
          font='white'
        />
      </Grid>
    </Content>
  );
};

export default Footer;
