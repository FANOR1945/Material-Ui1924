import React from 'react';
import PageBody from '../../../../components/Dashboard/PageBody';

import { Box } from '@material-ui/core';
import { useStyles } from '../Extern/extern.styles';
const AddSeedrs = () => {
  const classes = useStyles();
  return (
    <Box>
      <PageBody>
        <Box className={classes.content_body}>
          <h1>Registrar Productor Semillerista</h1>
          <p>Page Body</p>
        </Box>
      </PageBody>
    </Box>
  );
};

export default AddSeedrs;
