import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

function FourthSection() {
  const classes = useStyles();
  return (
    <div className={classes.section3} id="section-4">
      <div className={classes.gridWrapper}>
        <Grid xs={12} md={8} container spacing={0}>
          <Typography align="right" variant="h3" className={classes.heading}>
            About Us
          </Typography>
          <Typography align="justify" className={classes.subhead}>
          Welcome to WAUU Radio App, your premier destination for the ultimate listening experience! Crafted with passion and precision using Flutter, WAUU Radio App brings the world of radio stations and podcasts right to your fingertips. 
          At WAUU, we believe in the power of sound to inspire, inform, and entertain. Our app is designed to provide seamless access to a diverse range of radio stations and podcasts, catering to every taste and interest. 
          Whether you're a music lover, a news junkie, or a podcast enthusiast, WAUU Radio App has something for everyone.
          </Typography>
        </Grid>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: 800,
    color: "#000000",
    fontSize: 42,
    [theme.breakpoints.down("sm")]: {
      fontSize: 35,
      marginTop: theme.spacing(4),
    },
  },
  subhead: {
    color: "#1E1E20",
    marginTop: theme.spacing(6),
    fontSize: 25,
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
  },
  section3: {
    backgroundImage: "url(/images/section4.svg)",
    backgroundSize: "auto 430px,auto 530px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center,center right -240px",
    minHeight: "100vh",
    paddingRight: theme.spacing(8),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      minHeight: "auto",
      backgroundImage: "none",
    },
  },
  gridWrapper: {
    justifyContent: "flex-start",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
    },
  },
}));

export default FourthSection;
