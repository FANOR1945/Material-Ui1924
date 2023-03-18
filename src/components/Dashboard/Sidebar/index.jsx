import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./sidebar.styles";

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <div className={classes.drawer}>
          <Typography
            component="h5"
            variant="h6"
            align="center"
            style={{
              margin: 10,
            }}
          >
            Settings
          </Typography>
          <Divider />
          <div className={classes.drawerItem} />
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
