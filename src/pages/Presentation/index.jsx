import React from "react";
import MyButton from "../../components/Global/MyButton";
import MyTextFieldInput from "../../components/Global/MyTextField";

import PageLayout from "../../layouts/PageLayout";
import { useStyles } from "./presentation.styles";
const Presentation = () => {
  const classes = useStyles();
  return (
    <PageLayout>
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
      Presentation
    </PageLayout>
  );
};

export default Presentation;
