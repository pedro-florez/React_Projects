
import React, { useContext } from 'react';
import AuthContext from '../../auth/AuthContext';
import types from '../../types/types';

/*
**  El Router Dom trae una props Por default como History
*/
const LoginScreen = ({ history }) => {
    
    const { dispatch } = useContext( AuthContext );    

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                nombre: 'Pedro Florez'
            }
        });
        
        // Reemplaza la Ruta
        history.replace( lastPath );

        // Redirecionar 
        //history.push('/');
    }
    
    return (
        <div className="container mt-4">
            <h1>Login Screen</h1>
            <hr/>
            
            <button 
                type="button"
                className="btn btn-primary"
                onClick={ handleLogin }>
                Ingresar
            </button>
        </div>
    )
}

export default LoginScreen;
