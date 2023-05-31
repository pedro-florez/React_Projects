
import React, { useState } from 'react';
import AppRouter from './AppRouter';
import UserContext from './UserContext';

const MainApp = () => {

    const [user, setUser] = useState( {} );    

    return (
        /*
        ** UserContext.Provider Provee la Informacion por Todos los Componentes Hijos,
        ** Se puder Enviar una variable u Objeto con el atributo Value
        */
        <UserContext.Provider value={
            {
                user,
                setUser
            }
        }>
            
            <AppRouter />

        </UserContext.Provider>
    );
}

export default MainApp;
