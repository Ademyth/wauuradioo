import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import { Language } from "@material-ui/icons";

function DownloadSection() {
  const classes = useStyles();
  return (
    <div className={classes.section1} id="section-2">
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={8}>
          <Typography align="right" variant="h3" className={classes.heading}>
            دریافت اپلیکیشن
          </Typography>
          <Typography align="right" variant="h4" className={classes.subhead}>
            نسخه iOS
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
              >
                <Language className={classes.appLogo} />
                <Typography align="center" className={classes.appName}>
                  وب اپلیکیشن
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="default"
                className={classes.appButton}
              >
                <img
                  src="/images/markets/logo_sibche.png"
                  alt="دانلود از سیب چه"
                  className={classes.appLogo}
                />
                <Typography align="center" className={classes.appName}>
                  سیبچه
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="default"
                className={classes.appButton}
              >
                <img
                  src="/images/markets/logo_sib_app.png"
                  alt="دانلود از سیب اپ"
                  className={classes.appLogo}
                />
                <Typography align="center" className={classes.appName}>
                  سیب اپ
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="default"
                className={classes.appButton}
              >
                <img
                  src="/images/markets/anardooni_logo.png"
                  alt="دانلود از اناردونی"
                  className={classes.appLogo}
                />
                <Typography align="center" className={classes.appName}>
                  اناردونی
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="default"
                className={classes.appButton}
              >
                <img
                  src="/images/markets/logo_i_apps.png"
                  alt="دانلود از آی اپس"
                  className={classes.appLogo}
                />
                <Typography align="center" className={classes.appName}>
                  آی اپس
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Typography align="right" variant="h4" className={classes.subhead}>
            نسخه اندروید
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
              >
                <Language className={classes.appLogo} />
                <Typography align="center" className={classes.appName}>
                  وب اپلیکیشن
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="default"
                className={classes.appButton}
              >
                <img
                  src="/images/markets/bazaar.png"
                  alt="دانلود از بازار"
                  className={classes.appLogo}
                />
                <Typography align="center" className={classes.appName}>
                  بازار
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="default"
                className={classes.appButton}
              >
                <img
                  src="/images/markets/google_play_logo.png"
                  alt="دانلود از گوگل پلی"
                  className={classes.appLogo}
                />
                <Typography align="center" className={classes.appName}>
                  Google Play
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.iphone}>
        <img src="/images/logo_typo.png" alt="روندا" className={classes.logo_type} />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: 800,
    color: "#5d5d5d",
    fontSize: 42,
    [theme.breakpoints.down('sm')]: {
      fontSize: 35,
    },
  },
  subhead: {
    color: "#989898",
    marginTop: theme.spacing(4),
    fontSize: 30,
    [theme.breakpoints.down('sm')]: {
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
    [theme.breakpoints.down('sm')]: {
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
    [theme.breakpoints.down('sm')]: {
      display: "none"
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
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center"
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
}));

export default DownloadSection;
