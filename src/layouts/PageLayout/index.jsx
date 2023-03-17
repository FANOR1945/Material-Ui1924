import React, { useState } from "react";
import { Container } from "../../components/Global";
import { Content } from "../../components/Global";
import { useStyles } from "./page_layout.styles";
import Slider from "../../components/LandingPages/Slider";
import AppBar from "../../components/LandingPages/AppBar";
import Footer from "../../components/LandingPages/Footer";
import DrawerNavigation from "../../components/LandingPages/DrawerNavigation";
import { Hidden } from "@material-ui/core";

const PageLayout = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const actionOpen = () => {
    setOpen(!open);
  };
  return (
    <Container>
      {" "}
      <Slider />
      <AppBar actionOpen={actionOpen} />
      <Hidden xlDown>
        <DrawerNavigation variant="permanent" open={false} />
      </Hidden>
      <Hidden xlUp>
        <DrawerNavigation
          variant="temporary"
          open={open}
          onClose={actionOpen}
        />
      </Hidden>
      <Content className={classes.page_layout}>
        {props.children} <Footer />
      </Content>{" "}
    </Container>
  );
};

export default PageLayout;
