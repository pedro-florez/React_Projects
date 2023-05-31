
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({
    isAuthenticated, // loggen True | false
    component: Component, // Nombre del Component a Mostrar
    ...rest // Url del componente u otros atributos 
}) => {

    // Obtener la Ultima Ruta que visito el User
    //console.log('🚀 rest', rest.location.pathname);

    // Almacenar la Ultima Url en el localStorage
    const pathname = rest.location.pathname;
    const search = rest.location.search;

    localStorage.setItem( 
        'lastPath', 
        ( search ? `${ pathname }${ search }`: pathname )
    );
    
    // Componente Colback ( component={ ( props ) => {} )
    return (
        <Route { ...rest }
            component={ ( props ) =>

                ( isAuthenticated ) ?
                <Component { ...props } /> : 
                <Redirect to="/login" />
            }
        />
    );
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute;