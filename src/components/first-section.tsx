import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { PhoneAndroid } from "@material-ui/icons";

function FirstSection() {
  const classes = useStyles();
  return (
    <div className={classes.section1} id="section-1">
      <img src="/images/logo.png" alt="logo" className={classes.logo} />
      <Typography variant="h2" className={classes.heading}>
        West African Union University<br />
        Radio Application
      </Typography>
      <Typography variant="h4" className={classes.subhead}>
      Enjoy the Beat
      </Typography>
      <div className={classes.buttonWraper}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          endIcon={<PhoneAndroid className={classes.buttonIcon} />}
          className={classes.button}
          onClick={() => {
            window.location.assign(
              "#section-2"
            );
          }}
        >
          Download
        </Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: 700,
    fontSize: 42,
    color: "#000000",
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      marginTop: theme.spacing(8)
    },
  },
  section1: {
    backgroundImage: "url(/images/section1.jpeg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(20),
    position: "relative",
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: "top center",
    },
  },
  buttonWraper: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2)
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(1)
    },
  },
  logo: {
    position: "absolute",
    right: 50,
    top: 30,
    height: 100,
    width: 100,
  },
  subhead: {
    color: "#1E1E20",
    fontWeight: 400,
    marginTop: theme.spacing(5),
    fontSize: 30,
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      marginTop: theme.spacing(2)
    },
  },
  button: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(6),
    fontSize: 25,
    borderRadius: 15,
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      marginTop: theme.spacing(4),
      fontSize: 25
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    },
  },
  buttonIcon: {
    fontSize: `30px!important`,
    [theme.breakpoints.down('xs')]: {
      fontSize: `20px!important`,
    },
  },
}));

export default FirstSection;
