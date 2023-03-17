import React from "react";

import { List, ListItem, Typography, Button, Link } from "@material-ui/core";

import { useStyles } from "./menu_navigation";

const MenuNavigation = () => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem>
        <Link href="/">
          <Button>
            <Typography>INGRESA5R</Typography>
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/sign-in">
          <Button>
            <Typography>INGRESAR</Typography>
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/seeds-ours">
          <Button>
            <Typography>Nuestras Semillas</Typography>
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/about-us">
          <Button>
            <Typography>Sobre Nosotros</Typography>
          </Button>
        </Link>
      </ListItem>

      <ListItem>
        <Link href="/services-ours">
          <Button>
            <Typography>Servicios</Typography>
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/contact-us">
          <Button>
            <Typography>Contactos</Typography>
          </Button>
        </Link>
      </ListItem>
    </List>
  );
};

export default MenuNavigation;
