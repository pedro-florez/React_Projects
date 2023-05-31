
import React, { useState } from 'react';
import MultipleCustomHook from '../03-customHook/MultipleCustomHook';

const UsoRealRef = () => {

    /*
    ** Nota: al ejecutar una accion si demora y se cancela la accion
    ** el componente devolvera un error, para evitarlo utilizaremos
    ** una referencia con useRef()
    ** Solucion en el Archivo hooks/useFetch.js
    */
   
    const [show, setShow] = useState( false );
        
    return (
        <>
            <h1>🚀 Uso Real de useRef()</h1>

            { show && <MultipleCustomHook title={ false } /> }

            <hr/>

            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={ () => {
                    setShow( !show );
                }}>
                Show | Hidden
            </button>
            
        </>
    )
}

export default UsoRealRef;
