import React from 'react';
import { Box, Toolbar, Typography, Divider, Grid } from '@material-ui/core';
import { useStyles } from './page_header.styles';
import { Content } from '../../Global';

const PageHeader = ({ title, children, style }) => {
  const classes = useStyles();
  return (
    <Grid>
      <Box
        position='fixed'
        width='100%'
        zIndex={2}
      >
        <Toolbar
          variant='dense'
          className={classes.toolbar}
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
      </Box>
      <Toolbar variant='dense' />
    </Grid>
  );
};

export default PageHeader;
