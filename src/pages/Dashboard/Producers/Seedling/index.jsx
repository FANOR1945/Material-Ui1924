import React from 'react';
import { Box } from '@material-ui/core';
import { MyButton } from '../../../../components/Global';
import PageBody from '../../../../components/Dashboard/PageBody';
import PageHeader from '../../../../components/Dashboard/PageHeader';
import { useStyles } from './seedling.styles';
import useClicked from '../../../../hooks/useClicked';
const Seedling = () => {
  const classes = useStyles();
  const [onClicked] = useClicked();
  return (
    <Box>
      <PageHeader title='Productores Semilleristas'>
        <Box onClick={() => onClicked('/producers/addgrowers')}>
          <MyButton
            color='green'
            hover='#102c03'
            font='white'
            className={classes.button}
          >
            Agregar
          </MyButton>{' '}
        </Box>
      </PageHeader>
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
