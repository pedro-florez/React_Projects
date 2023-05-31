
import React, { useMemo, useState } from 'react';
import procesoPesado from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter';

const MemoHook = () => {

    const { counter, increment } = useCounter( 100 );

    const [show, setShow] = useState( false );

    ////////////////////////////////////////////////////////

    /*
    ** useMemo Memoriza los resultados para no 
    ** renderizarlos si son iguales.
    */
    const memoProcesoPesado = useMemo( () => procesoPesado( counter ), [ counter ]);

    return (
        <>
            <h1>🚀 useMemo( <small>{ counter }</small> )</h1>
            <hr/>

            <p> { memoProcesoPesado } </p>

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

export default MemoHook;
