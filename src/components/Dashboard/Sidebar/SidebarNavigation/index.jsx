import React from 'react';
import {
  Drawer,
  List,
  Toolbar,
  Divider,
  IconButton,
  Box,
} from '@material-ui/core';
import ListItems from '../ListItems';

import { useStyles } from './sidebar_navigation.styles';
import LogoPlanta from '../../../../assets/fonts/images/logo_plant1.png';
const SidebarNavigation = ({ data, collapsed, ...props }) => {
  const classes = useStyles();

  let renderData = data?.map((item, index) => {
    return (
      <ListItems
        key={index}
        item={item}
        collapsed={collapsed}
      />
    );
  });

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor='left'
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <Toolbar>
        <IconButton
          edge='start'
          onClick={props.onClose}
          color='contained'
        >
          <Box
            component='img'
            src={LogoPlanta}
            className={classes.logo_plant1}
          />
        </IconButton>
      </Toolbar>

      <Divider />
      <List
        className={classes.list}
        component='nav'
      >
        {renderData}
      </List>
    </Drawer>
  );
};

export default SidebarNavigation;
