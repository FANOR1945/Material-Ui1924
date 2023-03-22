import React from 'react';
import { List } from '@material-ui/core';
import ListItems from '../ListItems';

import { useStyles } from './sidebar_navigation.styles';

const SidebarNavigation = ({ data, collapsed }) => {
  const classes = useStyles();

  let renderData = data?.map((item, index) => {
    return <ListItems key={index} item={item} collapsed={collapsed} />;
  });

  return (
    <List className={classes.list} component='nav'>
      {renderData}
    </List>
  );
};

export default SidebarNavigation;
