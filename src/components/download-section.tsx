import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";

function DownloadSection() {
  const classes = useStyles();
  return (
    <div className={classes.section1} id="section-2">
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={8}>
          <Typography align="center" variant="h3" className={classes.heading}>
            To Download
          </Typography>
          <Typography align="center" variant="h4" className={classes.subhead}>
            Only available for Android
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
            className={classes.buttonContainer}
          >
            <Grid item>
              <Button
                variant="outlined"
                color="default"
                className={classes.appButton}
                onClick={() => {
                  window.location.assign("https://play.google.com/");
                }}
              >
                <img
                  src="/images/markets/google_play_logo.png"
                  alt="google"
                  className={classes.appLogo}
                />
                <Typography align="center" className={classes.appName}>
                  Google Play
                </Typography>
              </Button>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.iphone}>
        <img
          src="/images/logo_typo.png"
          alt="logo"
          className={classes.logo_type}
        />
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
    },
  },
  subhead: {
    color: "#1E1E20",
    marginTop: theme.spacing(4),
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  section1: {
    backgroundImage: "url(/images/section2_back.svg),url(/images/path.svg)",
    backgroundSize: "525px 825px,auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right -135px,bottom -30px left -215px",
    minHeight: "100vh",
    paddingRight: theme.spacing(8),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
    },
  },
  iphone: {
    width: 305,
    height: 488,
    position: "absolute",
    right: 80,
    top: 100,
    bottom: 0,
    backgroundImage: "url(/images/iphone.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logo_type: {
    width: "50%",
  },
  gridContainer: {
    justifyContent: "flex-end",
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  appName: {
    fontWeight: "bold",
    color: "#211e1e",
  },
  appButton: {
    display: "flex",
    flexDirection: "column",
    border: "none",
    boxShadow: "0 3px 6px #ff582171",
    width: 110,
    height: 160,
    borderRadius: 26,
    marginLeft: 15,
  },
  appLogo: {
    width: "auto",
    height: 50,
    marginBottom: theme.spacing(3),
    color: "#ff5821",
  },
  commingSoon: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.5)",
    borderRadius: 26,
  },
  commingSoonText: {
    color: "#fff",
    fontSize: 18,
    textShadow: "1px 1px 2px #444",
    marginTop: 25,
  }
}));

export default DownloadSection;
