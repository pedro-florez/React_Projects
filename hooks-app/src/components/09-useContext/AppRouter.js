
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Navbar from './Navbar';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import Page404 from './Page404';

const AppRouter = () => {

    return (
        <Router>

            <>
                <Navbar />

                <Switch>

                    <Route exact path="/" component={ HomeScreen } />
                    <Route exact path="/about" component={ AboutScreen } />
                    <Route exact path="/login" component={ LoginScreen } />

                    <Route component={ Page404 } />

                </Switch>                           
            </>

        </Router>
    )
}

export default AppRouter;
