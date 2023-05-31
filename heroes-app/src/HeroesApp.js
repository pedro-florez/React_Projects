
import React, { useEffect, useReducer } from 'react';
import authReducer from './auth/authReducer';
import AuthContext from './auth/AuthContext';
import AppRouter from './routers/AppRouter';

const init = () => {
    return JSON.parse( localStorage.getItem('user') ) || { logged: false };
}

const HeroesApp = () => {

    // Inicializar el Reducer
    const [ user, dispatch ] = useReducer( authReducer , {}, init);

    // Actualizar el Reducer cuando haya un cambio en el Sistema
    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user) );
    }, [ user ]);
    
    return (
        <AuthContext.Provider value={ { user, dispatch } }>
            <AppRouter /> 
        </AuthContext.Provider>
    );
}

export default HeroesApp;
