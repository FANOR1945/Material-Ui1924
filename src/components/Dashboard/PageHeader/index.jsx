import React from 'react';
import { Box, Toolbar, Typography, Divider } from '@material-ui/core';
import { useStyles } from './page_header.styles';
import { Content } from '../../Global';

const PageHeader = ({ title, children, style }) => {
  const classes = useStyles();
  return (
    <Content>
      <Box
        position='fixed'
        width='100%'
        zIndex={2}
      >
        <Toolbar
          variant='dense'
          className={classes.toolbar}
          style={{ ...style }}
        >
          {title && (
            <Typography
              variant='h6'
              noWrap
              className={classes.headerTitle}
            >
              {title}
            </Typography>
          )}
          {children}
        </Toolbar>
        <Divider />
      </Box>
      <Toolbar variant='dense' />
    </Content>
  );
};

export default PageHeader;
