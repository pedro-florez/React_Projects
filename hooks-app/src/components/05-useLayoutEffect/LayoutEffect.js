
import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './layout.css';

const LayoutEffect = () => {    
    
    const { counter, increment } = useCounter( 1 );
    
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    const { quote } = !!data && data[0];

    //////////////////////////////////////////////////////////////

    /* 
    ** useLayoutEffect() Sirve para obtener elementos del 
    ** DOM despues de Renderizarce el componente
    */
    const tagP = useRef();

    const [boxSize, setBoxSize] = useState( {} );
    
    useLayoutEffect(() => {

        setBoxSize( tagP.current.getBoundingClientRect() );        
        
    }, [ quote ]); // Cambio del la Etiqueta <p>

    return (
        <>           
            <h1>🚀 useLayoutEffect()</h1>
            <hr/>
            
            <div className="card mb-3">

                <div className="card-body">

                    <blockquote className="blockquote mb-0">
                        <p ref={ tagP } >{ quote }</p>                        
                    </blockquote>

                </div>

            </div>

            <pre>
                { 
                    // Imprimir Objetos en Html
                    JSON.stringify( boxSize, null, 3 )
                }
            </pre>

            <button 
                type="button" 
                className="btn btn-primary"
                onClick={ increment }>
                Siguiente 
            </button>
        </>
    )
}

export default LayoutEffect;

