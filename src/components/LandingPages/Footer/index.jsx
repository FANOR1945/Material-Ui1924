import React from "react";

import { Grid } from "@material-ui/core";
import { Content } from "../../Global";
import CardHeader from "../../Global/CardHeader";
import { useStyles } from "./footer.styles";
const Footer = () => {
  const classes = useStyles();
  return (
    <Content className={classes.content_footer}>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <CardHeader
          titulo="Fanor"
          texto="Choque Aguirre"
          color="#088892 "
          font="white"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <CardHeader
          titulo="Contactenos"
          texto="INIAF"
          color="#144B76"
          font="white"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <CardHeader
          titulo="Betanzos"
          texto="Potosí Bolivia"
          color="rgba(248,80,50,1)"
          font="blue"
        />
      </Grid>
    </Content>
  );
};

export default Footer;
