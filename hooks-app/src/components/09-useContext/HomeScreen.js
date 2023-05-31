
import React, { useContext } from 'react';
import UserContext from './UserContext';

const HomeScreen = () => {

    /*
    ** useContext resive el Componente donde esta creado
    ** el Context ( createContext )
    */
    const { user } = useContext( UserContext );
    
    return (
        <>
            <h1>🚀 Home Screen</h1>
            <hr/>

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>
        </>
    )
}

export default HomeScreen;
