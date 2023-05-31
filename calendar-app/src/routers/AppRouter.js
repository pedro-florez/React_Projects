
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';
import LoadingScreen from '../components/ui/LoadingScreen';
import { startChecking } from '../actions/auth';

const AppRouter = () => {

    const { checking, uid  } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    // Estar Pendiente para Revalidar el TOKEN
    useEffect( () => {

        dispatch( startChecking() );
        
    }, [ dispatch ]);

    // Mostrar Pantalla de Espera...
    if ( checking ) {
        return ( <LoadingScreen /> );
    }

    return (
        <Router>            

            <>
                <Switch>

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isLogged={ !!uid } // Convertirlo a True si Bien ( null | undefined )
                    />

                    <PrivateRoute
                        exact 
                        path="/" 
                        component={ CalendarScreen }
                        isLogged={ !!uid }
                    />

                    <Redirect to="/" component={ LoginScreen } />

                </Switch>
            </>
            
        </Router>
    );
}

export default AppRouter;