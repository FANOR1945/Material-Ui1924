import React from 'react';
import { Box } from '@material-ui/core';

import PageBody from '../../../../components/Dashboard/PageBody';
import PageHeader from '../../../../components/Dashboard/PageHeader';
import { useStyles } from './extern.styles';
const Extern = () => {
  const classes = useStyles();
  return (
    <Box>
      <PageHeader title='Productores Externos' />
      <PageBody>
        <Box className={classes.content_body}>
          <h1>Productor Externo</h1>
          <p>Page Body</p>
        </Box>
      </PageBody>
    </Box>
  );
};

export default Extern;
