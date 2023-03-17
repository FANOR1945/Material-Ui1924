import React from "react";
import MyCard from "../../../components/Global/MyCard";
import { Grid } from "@material-ui/core";
import PageLayout from "../../../layouts/PageLayout";
import { useStyles } from "./contact_us.styles";
const ContactUs = () => {
  const classes = useStyles();
  return (
    <PageLayout>
      <Grid container className={classes.layout_content}>
        <MyCard className={classes.content_card}>Fanor Cards</MyCard>
      </Grid>
      <Grid container className={classes.layout_content}>
        <MyCard className={classes.content_card}>Fanor Cards</MyCard>
      </Grid>
      <Grid container className={classes.layout_content}>
        <MyCard className={classes.content_card}>Fanor Cards</MyCard>
      </Grid>
      <Grid container className={classes.layout_content}>
        <MyCard className={classes.content_card}>Fanor Cards</MyCard>
      </Grid>
    </PageLayout>
  );
};

export default ContactUs;
