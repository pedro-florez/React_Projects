
import React, { useEffect, useState } from 'react';
import Messaje from './Messaje';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        nombre: '',
        email: ''                
    });

    const { nombre, email } = formState;

    useEffect(() => {
        //console.log('🚀 La Pagina Cargo');
    }, []);

    useEffect(() => {
        //console.log('🚀 FormState Cambio');
    }, [ formState ]);

    useEffect(() => {
        //console.log('🚀 El Nombre Cambio');
    }, [ nombre ]);

    const handleInputChange = ({ target }) => {       

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>
            <h1>🚀 Simple Form ( useEffect )</h1>
            <hr/>

            <div className="form-group">
                
                <input 
                    type="text" 
                    className="form-control mb-3"
                    name="nombre"
                    value={ nombre }
                    autoComplete="off"                    
                    onChange={ handleInputChange }
                    placeholder="Ingresar nombre"
                />
                
                <input 
                    type="text" 
                    className="form-control mb-3"
                    name="email"
                    value={ email }
                    autoComplete="off"                    
                    onChange={ handleInputChange }
                    placeholder="Ingresar email"
                />                

                { nombre === 'Pedro' && <Messaje /> }

            </div>                       
        </>
    )
}

export default SimpleForm;
