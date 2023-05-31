
import React, { useRef } from 'react';

const FocusScreen = () => {

    const nombreRef = useRef();

    // Agregar Focus en el Input
    const handleClick = () => {
        
        //document.querySelector('input').focus();
        document.querySelector('input').select();

        // Usando useRef()
        nombreRef.current.select();
    }

    return (
        <>
            <h1>🚀 Focus Screen ( useRef )</h1>
            <hr/>

            <input 
                ref={ nombreRef }
                type="text" 
                className="form-control mb-3"
                name="nombre"
                placeholder="Ingresar tu nombre"
            />

            <button 
                type="button" 
                className="btn btn-primary"
                onClick={ handleClick }>
                Agregar Focus
            </button>            
        </>
    )
}

export default FocusScreen;
