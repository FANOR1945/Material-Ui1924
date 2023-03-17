import React from "react";
import MyButton from "../../components/Global/MyButton";
import MyTextFieldInput from "../../components/Global/MyTextField";
import { Grid } from "@material-ui/core";
import PageLayout from "../../layouts/PageLayout";
import { useStyles } from "./presentation.styles";
const Presentation = () => {
  const classes = useStyles();
  return (
    <PageLayout>
      <Grid container>
        <MyButton color="blue" font="#EBF5FB" className={classes.button}>
          fanor
        </MyButton>
        <MyButton color="orange" font="#EAF2F8" className={classes.button}>
          Choque
        </MyButton>
        <MyButton color="green" font="white" className={classes.button}>
          Aguirre
        </MyButton>
        <MyTextFieldInput
          className={classes.input}
          color="blue"
          font="white"
          placeholder="Correo electrónico o numero de télefono"
          name="email"
          type="text"
        />
        <MyTextFieldInput
          className={classes.input}
          color="orange"
          font="white"
          placeholder="Contraseña"
          name="password"
          type="password"
        />
        <MyButton color="#F9EBEA" font="white" className={classes.button}>
          Patricia
        </MyButton>
        <MyButton color="#C0392B" font="white" className={classes.button}>
          2023
        </MyButton>
      </Grid>
    </PageLayout>
  );
};

export default Presentation;
