import React from 'react';
import PageLayout from '../../../layouts/PageLayout';
import { Typography, Grid, Paper } from '@material-ui/core';
import { Content } from '../../../components/Global';
import Cards from '../../../components/Global/Cards/Cards';
import { useStyles } from './about_us.styles';

const AboutUs = () => {
  const classes = useStyles();
  return (
    <PageLayout>
      <Content className={classes.content_about_us}>
        <Grid container>
          <Grid
            item
            xs={12}
          >
            <Paper className={classes.paperstyle}>
              <Typography>Sobre Nosotros</Typography>
              <Grid
                container
                spacing={1}
              >
                <Grid
                  item
                  xs={12}
                >
                  <Cards
                    titulo='Ofrecemos la soluciona tus problemas'
                    texto='2023'
                  />
                </Grid>{' '}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                >
                  <Cards
                    titulo='Semillas, trigo, cebada, avena'
                    texto='692'
                  />
                </Grid>
              </Grid>
            </Paper>{' '}
          </Grid>{' '}
        </Grid>{' '}
        <Grid container>
          <Grid
            item
            xs={12}
          >
            <Paper className={classes.paperstyle}>
              <Typography>Sobre Nosotros</Typography>
              <Grid
                container
                spacing={1}
              >
                <Grid
                  item
                  xs={12}
                >
                  <Cards
                    titulo='Ofrecemos la soluciona tus problemas'
                    texto='2023'
                  />
                </Grid>{' '}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                >
                  <Cards
                    titulo='Semillas, trigo, cebada, avena'
                    texto='692'
                  />
                </Grid>
              </Grid>
            </Paper>{' '}
          </Grid>{' '}
        </Grid>
      </Content>
    </PageLayout>
  );
};

export default AboutUs;
