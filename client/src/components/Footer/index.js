import React from "react";
import { Container, Grid, Link } from "@material-ui/core";

// import { ThemeProvider } from '@material-ui/core/Hidden';
import useStyles from "./useStyles";

import ContactUs from "./ContactUs/ContactUs";
import Payment from "./Payment/Payment";
import MyAccount from "./MyAccount/MyAccount";
import Information from "./Information/Information";

import Copy from "./Copy/Copy";

const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.bg} maxWidth>
      <Link href="/#" className={classes.logoContainer}>
        <img src="./img/Logo.svg" alt="logo" className={classes.logo} />
      </Link>
      <Grid container>
        <ContactUs />
        <Payment />
        <MyAccount />
        <Information />
      </Grid>
      <Grid>
        <Copy />
      </Grid>
    </Container>
  );
};

export default Footer;
