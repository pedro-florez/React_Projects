
import React, { useContext } from 'react';
import UserContext from './UserContext';

const LoginScreen = () => {

    /*
    ** Actualizar el UserContext con el useState
    ** Que esta en el MainApp
    */

    const { user, setUser } = useContext( UserContext );

    const handleLogin = () => {

        setUser({
            id: new Date().getTime(),
            user: 'pedroAttak',
            password: 123636
        });
    }

    return (
        <>
            <h1>🚀 Login Screen</h1>
            <hr/>

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button 
                type="button" 
                className="btn btn-primary"
                onClick={ handleLogin }>
                Ingresar   
            </button>          
        </>
    )
}

export default LoginScreen;
