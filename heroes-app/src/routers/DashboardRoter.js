
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from '../layouts/Navbar';
import HeroeScreen from '../components/heroes/HeroeScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import Footer from '../layouts/Footer';
import SearchScreen from '../components/search/SearchScreen';

const DashboardRoter = () => {
    
    return (
        <>
            <Navbar />

            <div className="container">

                <Switch>                    
                    
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/heroe/:heroeId" component={ HeroeScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel" />

                </Switch>
                
            </div>

            <Footer />
        </>
    )
}

export default DashboardRoter;
