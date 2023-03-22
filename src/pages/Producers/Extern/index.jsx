import React from 'react';
import { Box } from '@material-ui/core';
import PageBody from '../../../components/Dashboard/PageBody';
import PageHeader from '../../../components/Dashboard/PageHeader';

const Extern = () => {
  return (
    <React.Fragment>
      <PageHeader title='Productores Externos' />
      <PageBody style={{ display: 'flex' }}>
        <Box
          flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <h1>Productor Externo</h1>
          <p>Page Body</p>
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default Extern;
