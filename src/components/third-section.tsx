import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper, Typography, useMediaQuery, useTheme } from "@material-ui/core";

function ThirdSection() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={classes.section3} id="section-3">
      <Typography align="center" variant="h3" className={classes.heading}>
        section 3
      </Typography>
      <div className={classes.gridWrapper}>
        <Grid xs={10} container justify="center" spacing={matches ? 1 : 6}> 
          <Grid className={classes.feature} item md={4} xs={12}>
            <Paper className={classes.paper}>
              <img src="/images/discount.png" alt="همواه تخفیف" className={classes.icon} />
              <Typography align="center" className={classes.title}>
                another one
              </Typography>
              <Typography align="center" className={classes.subtitle}>
                one more
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.feature} item md={4} xs={12}>
            <Paper className={classes.paper}>
              <img src="/images/fast_delivery.png" alt="تحویل سریع" className={classes.icon} />
              <Typography align="center" className={classes.title}>
                more
              </Typography>
              <Typography align="center" className={classes.subtitle}>
                more more
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.feature} item md={4} xs={12}>
            <Paper className={classes.paper}>
              <img src="/images/discount.png" alt="تخفیف سفارش اول" className={classes.icon} />
              <Typography align="center" className={classes.title}>
                another one
              </Typography>
              <Typography align="center" className={classes.subtitle}>
                another more
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: 800,
    color: "#5d5d5d",
    fontSize: 42,
    marginTop: theme.spacing(10)
  },
  subhead: {
    color: "#989898",
    marginTop: theme.spacing(4),
    fontSize: 30,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  section3: {
    backgroundImage: "url(/images/section3.svg)",
    backgroundSize: "auto 630px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right -240px",
    minHeight: "100vh",
    paddingRight: theme.spacing(8),
    position: "relative",
  },
  feature: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(7),
    },
  },
  paper: {
    boxShadow: "0 15px 20px #f1efef",
    borderRadius: 30,
    padding: theme.spacing(2),
    textAlign: "center",
    height: "100%",
  },
  gridWrapper: {
    justifyContent: "center",
    display: "flex",
    marginTop: theme.spacing(4),
  },
  icon: {
    height: 70,
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    color: "#5d5d5d",
    fontSize: 23,
    marginBottom: 20,
  },
  subtitle: {
    color: "#989898",
    fontSize: 20,
    marginBottom: 10,
  },
}));

export default ThirdSection;
