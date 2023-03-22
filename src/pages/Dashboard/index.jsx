import React from 'react';
import { Box } from '@material-ui/core';
import PageBody from '../../components/Dashboard/PageBody';
import PageHeader from '../../components/Dashboard/PageHeader';
import { useStyles } from './dashboard.styles';
const Dashboard = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <PageHeader title='Sistema de Acondicionamiento de Semillas' />
      <PageBody style={{ display: 'flex' }}>
        {/*important change style to style.js  */}
        <Box className={classes.content_body}>
          <h1>Bienvenido</h1>
          <p>Plant Betanzos</p>
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default Dashboard;
