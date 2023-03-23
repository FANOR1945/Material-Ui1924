import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import PageBody from '../../../../components/Dashboard/PageBody';
import PageHeader from '../../../../components/Dashboard/PageHeader';

const useStyles = makeStyles((theme) => ({
  leftSpacing: {
    marginRight: theme.spacing(1),
  },
}));

const Seedling = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <PageHeader title='Productores Semilleristas'></PageHeader>
      <PageBody style={{ display: 'flex' }}>
        <Box
          flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <h1>Productor Semillerista</h1>
          <p>Page Body</p>
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default Seedling;
