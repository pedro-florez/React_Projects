
import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import AuthContext from '../auth/AuthContext';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoter from './DashboardRoter';

const AppRouter = () => {

    const { user:{ logged } } = useContext( AuthContext );
    
    return (
        <Router>

            <>
                <Switch>                                      
                    
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ logged }
                    />

                    <PrivateRoute 
                        path="/"
                        component={ DashboardRoter }
                        isAuthenticated={ logged }
                    />

                    {/* <Route exact path="/login" component={ LoginScreen } /> */}
                    {/* Rutas Internas ( Hijas ) sin colocar ( exact ) */}
                    {/* <Route path="/" component={ DashboardRoter } /> */}

                </Switch>

            </>

        </Router>
    )
}

export default AppRouter;
