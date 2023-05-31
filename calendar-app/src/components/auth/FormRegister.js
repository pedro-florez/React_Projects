
import React from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

import useSimpleForm from '../../hooks/useSimpleForm';
import { startRegister } from '../../actions/auth';

const FormRegister = () => {

    const dispatch = useDispatch();    

    const [ formState, handleInputChange ] = useSimpleForm({
        name: '',
        email: '',
        password: '',
        comfirm: ''
    });

    const { name, email, password, comfirm } = formState;

    const handleRegisterUser = (e) => {

        e.preventDefault();

        // Validar las Contraseñas
        if ( password !== comfirm ) {

            return Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
        }

        dispatch(
            startRegister( name, email, password )
        );
    }

    return (
        <div className="col-md-6 login-form-2">

            <h3>Registro</h3>

            <form onSubmit={ handleRegisterUser }>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={ name }
                        onChange={ handleInputChange }
                        placeholder="Nombre"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
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
                        type="password"
                        className="form-control"
                        name="comfirm"
                        value={ comfirm }
                        onChange={ handleInputChange }
                        placeholder="Repita la contraseña" 
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="submit" 
                        className="btnSubmit" 
                        value="Crear cuenta" />
                </div>

            </form>

        </div>
    );
}

export default FormRegister;
