import {ThemeProvider as MaterialUiProvider} from "@material-ui/core/styles";
import {StylesProvider} from "@material-ui/styles";
import theme from "./themes/light";
import "vazir-font/dist/Farsi-Digits/font-face-FD.css";
import {makeStyles, Theme} from "@material-ui/core/styles";

import EnPrivacy from "./components/enprivacy";
import ChangeLogs from "./components/changes";
import Home from "./components/home";
import AboutUs from "./screens/aboutUs/AboutUs";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

import ReactGA from 'react-ga';
import {useEffect} from "react";

function App() {
    const classes = useStyles();

    useEffect(() => {
        ReactGA.initialize('G-ZVCRDT2JJ0');
        ReactGA.pageview(window.location.pathname + window.location.search);
    });
    return (
        <MaterialUiProvider theme={theme}>
            <StylesProvider injectFirst>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/en/privacy" component={EnPrivacy}/>
                        <Route path="/fa/changes" component={ChangeLogs}/>
                        <Route path="/AboutUs" component={AboutUs}/>
                    </Switch>
                </Router>
            </StylesProvider>
        </MaterialUiProvider>
    );
}

const useStyles = makeStyles((theme: Theme) => ({}));

export default App;
