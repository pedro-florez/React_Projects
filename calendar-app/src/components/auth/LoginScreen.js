
import React from 'react';
import { useDispatch } from 'react-redux';

import useSimpleForm from '../../hooks/useSimpleForm';
import FormRegister from './FormRegister';
import { startLogin } from '../../actions/auth';
import './login.css';

const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formState, handleInputChange ] = useSimpleForm({
        email: '',
        password: ''
    });

    const { email, password } = formState;

    const handleLogin = (e) => {

        e.preventDefault();
             
        dispatch( 
            startLogin( email, password )
        );
    }

    return (
        <div className="container login-container">

            <div className="row">

                <div className="col-md-6 login-form-1">

                    <h3>Ingreso</h3>

                    <form onSubmit={ handleLogin }>

                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                name="email"
                                value={ email }
                                onChange={ handleInputChange }
                                placeholder="Correo"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={ password }
                                onChange={ handleInputChange }
                                placeholder="Contraseña"
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>

                    </form>

                </div>

                <FormRegister />

            </div>

        </div>
    );
}

export default LoginScreen;