
import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import Small from './Small';

const Memorize = () => {

    const { counter, increment } = useCounter();

    // Prueba Para renderizar el Componente
    const [show, setShow] = useState( false );

    return (
        <>
            <h1>🚀 Memorize <Small valor={ counter } /> </h1>
            <hr/>

            <button
                type="button"
                className="btn btn-primary me-3"
                onClick={ increment }>
                +1
            </button>

            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={ () => {
                    setShow( !show );
                }}>
                { show ? 'Show ' : 'Hidden ' } ( { JSON.stringify( show ).toUpperCase() } )                
            </button>
        </>
    )
}

export default Memorize;
