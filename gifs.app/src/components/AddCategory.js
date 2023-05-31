
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategorias }) => {
    
    const [inputValue, setInputValue] = useState('');

    // Cambiar Value del Input
    const handleInputChange = (e) => {

        // Setear el valor del input
        setInputValue( e.target.value );
    }

    // Enviar Formulario
    const handleSubmit = (e) => {

        e.preventDefault();

        // Validar que tenga Valor el Input
        if ( inputValue.trim().length > 2 ) {

            // Setear el setCategorias
            setCategorias( cats => [ inputValue ] );
            //setCategorias( cats => [ inputValue, ...cats ] );
            
            // Limpiar el Input
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="Buscar GIF Favorito..."
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory;
