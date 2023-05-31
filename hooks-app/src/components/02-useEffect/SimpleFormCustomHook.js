
import React, { useEffect } from 'react';
import useSimpleForm from '../../hooks/useSimpleForm';

const SimpleFormCustomHook = () => {

    const [formState, handleInputChange] = useSimpleForm({
        nombre: '',
        email: '',
        password: ''             
    });
    
    const { nombre, email, password } = formState;    

    useEffect(() => {
        console.log('🚀 El Nombre Cambio');                       
    }, [ nombre ]);

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formState);
    }

    return (
        <form onSubmit={ handleSubmit }>

            <h1>🚀 Simple Form Custom Hook ( useEffect ) </h1>
            <hr/>

            <div className="mb-3">                
                <input 
                    type="text" 
                    className="form-control"
                    name="nombre"
                    value={ nombre }
                    autoComplete="off"                    
                    onChange={ handleInputChange }
                    placeholder="Ingresar nombre"
                />
            </div>

            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    name="email"
                    value={ email }
                    autoComplete="off"                    
                    onChange={ handleInputChange }
                    placeholder="Ingresar email"
                />
            </div>

            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    name="password"
                    value={ password }                   
                    onChange={ handleInputChange }
                    placeholder="Ingresar password"
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
                
        </form>
    )
}

export default SimpleFormCustomHook;
