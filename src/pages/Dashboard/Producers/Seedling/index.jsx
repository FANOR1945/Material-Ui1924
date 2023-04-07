import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';

import PageBody from '../../../../components/Dashboard/PageBody';
import PageHeader from '../../../../components/Dashboard/PageHeader';
import { useStyles } from './seedling.styles';
const Seedling = () => {
  const classes = useStyles();

  return (
    <Box>
      <PageHeader title='Productores Semilleristas'></PageHeader>
      <PageBody>
        <Box className={classes.content_body}>
          <h1>Productor Semillerista</h1>
          <p>Page Body</p>
        </Box>
      </PageBody>
    </Box>
  );
};

export default Seedling;
