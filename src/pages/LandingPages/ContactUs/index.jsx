import React from 'react';
import MyCard from '../../../components/Global/MyCard';
import { Grid } from '@material-ui/core';
import PageLayout from '../../../layouts/PageLayout';
import { MyButton } from '../../../components/Global';
import { useStyles } from './contact_us.styles';
const ContactUs = () => {
  const classes = useStyles();
  return (
    <PageLayout
      container
      className={classes.layout_content}
    >
      <Grid
        container
        className={classes.content_card}
      >
        <Grid>
          <MyButton
            color='orange'
            font='white'
            hover='green'
            className={classes.button}
          >
            fanor
          </MyButton>
        </Grid>
        <Grid>
          <MyCard>Fanor Cards</MyCard>
        </Grid>
        <Grid>
          <MyCard>Fanor Cards</MyCard>
        </Grid>
        <Grid>
          <MyCard>Fanor Cards</MyCard>
        </Grid>{' '}
      </Grid>
    </PageLayout>
  );
};

export default ContactUs;
