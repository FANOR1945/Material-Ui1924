import React from 'react';
import { Box } from '@material-ui/core';
import PageBody from '../../components/Dashboard/PageBody';
import { useStyles } from './seeds_ours.styles';
const SeedsOurs = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <PageBody style={{ display: 'flex' }}>
        {' '}
        {/**important change style to style.js  */}
        <Box className={classes.content_body} justifyContent='center'>
          <h1>Nuestras Semillas</h1>
          <p>Instituto Nacional de Innovacion Agropecuaria Forestal Potsi</p>
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default SeedsOurs;
