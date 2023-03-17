import React from "react";
import { Box, Grid, Link, Hidden, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Content } from "../../../../components/Global";
import { useStyles } from "./signin.styles";
import logoa from "../../../../assets/fonts/images/logo_a.png";
import PageLayout from "../../../../layouts/PageLayout";
import MyTextFieldInput from "../../../../components/Global/MyTextField";
import MyButton from "../../../../components/Global/MyButton";

const SignIn = () => {
  const classes = useStyles();
  return (
    <PageLayout>
      <Grid container className={classes.layout_login}>
        <Grid className={classes.paperstyle}>
          <Hidden only={["md", "lg"]}>
            <Grid container>
              <Box className={classes.logo}>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Grid>
          </Hidden>
          <Box
            component="img"
            src={logoa}
            className={classes.align_image_text}
          />
          <Grid container className={classes.form}>
            <MyTextFieldInput
              className={classes.input}
              color="#E9F7EF"
              font="#A6ACAF"
              placeholder="Correo electrónico o numero de télefono"
              name="email"
              type="text"
            />
            <Link href="/home" underline="none">
              <Typography className={classes.link}>
                ¿Olvidaste tu Contraseña?{" "}
              </Typography>
            </Link>

            <MyTextFieldInput
              className={classes.input}
              color="#E9F7EF"
              font="#A6ACAF"
              placeholder="Contraseña"
              name="password"
              type="password"
            />
            <Content className={classes.button}>
              <MyButton href="/home" color="orange" className={classes.button}>
                <Typography className={classes.typography}>
                  Iniciar Sesión
                </Typography>
              </MyButton>
            </Content>
          </Grid>
          <Link href="/home" underline="none">
            <Typography className={classes.typography}>
              Crear Cuenta Nueva
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default SignIn;