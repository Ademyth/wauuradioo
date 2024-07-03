import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Typography, CircularProgress } from "@material-ui/core";
import { PhoneAndroid, PlayArrow, Pause } from "@material-ui/icons";

function FirstSection() {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = React.useRef(new Audio("https://listen.radioking.com/radio/670093/stream/734161"));

  const togglePlayPause = () => {
    setIsLoading(true);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("playing", () => {
      setIsPlaying(true);
      setIsLoading(false);
    });
    audio.addEventListener("pause", () => {
      setIsPlaying(false);
      setIsLoading(false);
    });
    audio.addEventListener("error", () => {
      setIsPlaying(false);
      setIsLoading(false);
    });

    return () => {
      audio.removeEventListener("playing", () => {
        setIsPlaying(true);
        setIsLoading(false);
      });
      audio.removeEventListener("pause", () => {
        setIsPlaying(false);
        setIsLoading(false);
      });
      audio.removeEventListener("error", () => {
        setIsPlaying(false);
        setIsLoading(false);
      });
    };
  }, []);

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
      <div className={classes.buttonWrapper}>
      <Button
          variant="contained"
          size="large"
          color="primary"
          endIcon={<PhoneAndroid className={classes.buttonIcon} />}
          className={classes.button}
          onClick={() => {
            window.location.assign("#section-2");
          }}
        >
          Download
        </Button>


        <Button
          variant="contained"
          size="large"
          color="primary"
          endIcon={isLoading ? <CircularProgress size={20} /> : (isPlaying ? <Pause className={classes.buttonIcon} /> : <PlayArrow className={classes.buttonIcon} />)}
          className={classes.button}
          onClick={togglePlayPause}
          disabled={isLoading}
        >
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: 700,
    fontSize: 48,
    color: "#000000",
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
      marginTop: theme.spacing(8)
    },
  },
  section1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url(/images/section1.jpeg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: theme.spacing(4),
    textAlign: 'center',
    position: "relative",
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: "top center",
      paddingTop: theme.spacing(12),
    },
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
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
    fontSize: 32,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      marginTop: theme.spacing(2)
    },
  },
  button: {
    margin: theme.spacing(1),
    fontSize: 20,
    borderRadius: 15,
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      fontSize: 18,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    },
  },
  buttonIcon: {
    fontSize: `24px!important`,
    [theme.breakpoints.down('xs')]: {
      fontSize: `20px!important`,
    },
  },
}));

export default FirstSection;
