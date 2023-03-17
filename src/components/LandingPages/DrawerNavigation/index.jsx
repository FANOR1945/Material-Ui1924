import React from "react";
import { Drawer, Divider, Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Hidden } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useStyles } from "./drawer_navigation.styles";
import MenuNavigation from "../MenuNavigation";
const DrawerNavigation = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden only={["md", "lg"]}>
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right"
          variant={props.variant}
          open={props.open}
          onClose={props.onClose ? props.onClose : null}
        >
          <Toolbar>
            <IconButton edge="start" onClick={props.onClose} color="contained">
              <ArrowForwardIosIcon />
            </IconButton>
          </Toolbar>
          <Divider />

          <MenuNavigation />
        </Drawer>
      </Hidden>
    </div>
  );
};

export default DrawerNavigation;
