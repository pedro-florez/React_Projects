
import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

const MultipleCustomHook = ( { title = true } ) => {

    // Custom Hook useCounter
    const { counter, increment } = useCounter( 1 );

    // Custom Hook useFetch
    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    /* 
    ** Convertir Valor Null en True o False
    ** !null  = true
    ** !!null = false
    */
    const { author, quote, series } = !!data && data[0];

    return (
        <>           
            { title && <h1>Multiple Custom Hook</h1> }
            <h2>🚀 The Breaking Bad API </h2>
            <hr/>

            { 
                loading ? 
                <div className="loader">Cargando...</div> :
                <>
                    <div className="card mb-3">

                        <div className="card-header">
                            { series }
                        </div>

                        <div className="card-body">

                            <blockquote className="blockquote mb-0">
                                <p>{ quote }</p>
                                <footer className="blockquote-footer">Autor: <cite title="Source Title">{ author }</cite></footer>
                            </blockquote>

                        </div>

                    </div>                   
                </>                
            }

            <button 
                type="button" 
                className="btn btn-primary"
                onClick={ increment }>
                Siguiente 
            </button>
        </>
    )
}

export default MultipleCustomHook;
