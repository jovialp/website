import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Views
// import Home from './views/home';
import About from './views/about';
import Resume from './views/resume';
import Portfolio from './views/portfolio/';
// import Portfolio from './views/portfolio';

const menu = (
    <Router history={createBrowserHistory()}>

        <Navbar />
        <div className="app-body">
            <Switch>
                <Route exact path="/" render={() => <About />} />
                {/* <Route exact path="/home" render={() => <Home />} /> */}
                {/* <Route exact path="/about" render={() => <About />} /> */}
                <Route exact path="/resume" render={() => <Resume />} />
                <Route exact path="/portfolio" render={() => <Portfolio />} />
            </Switch>
        </div>
        <Footer />
    </Router>
);

ReactDOM.render(menu, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
