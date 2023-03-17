import React from "react";
import MyButton from "../../components/Global/MyButton";
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
      Presentation
    </PageLayout>
  );
};

export default Presentation;
