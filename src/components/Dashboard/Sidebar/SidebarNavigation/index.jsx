import React from 'react';
import { Drawer, List, Toolbar, Divider, IconButton } from '@material-ui/core';
import ListItems from '../ListItems';

import { useStyles } from './sidebar_navigation.styles';

const SidebarNavigation = ({ data, collapsed, ...props }) => {
  const classes = useStyles();

  let renderData = data?.map((item, index) => {
    return <ListItems key={index} item={item} collapsed={collapsed} />;
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
        <IconButton edge='start' onClick={props.onClose} color='contained'>
          <button>Fanor</button>
        </IconButton>
      </Toolbar>

      <Divider />
      <List className={classes.list} component='nav'>
        {renderData}
      </List>
    </Drawer>
  );
};

export default SidebarNavigation;
