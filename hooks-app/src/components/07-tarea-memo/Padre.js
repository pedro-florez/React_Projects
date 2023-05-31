
import React, { useCallback, useState } from 'react';
import Hijo from './Hijo';

const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];

    const [valor, setValor] = useState(0);

    /*const incrementar = ( num ) => {
        setValor( valor + num )
    }*/

    const incrementar = useCallback( (num) => {
        setValor( v => v + num );
    }, [ setValor ] );

    return (

        <>
            <h1>🚀 Componente Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }                        
        </>
    )
}

export default Padre;
