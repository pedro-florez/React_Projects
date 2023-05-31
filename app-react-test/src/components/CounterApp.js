
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* Snniper Crear un Functional Component con PropType
/* Comando => rafcp
/* Comando => rafce 
-------------------------------------------------- */
const CounterApp = ( { valor } ) => {

    /* Definir el Hook useState()
    /* el useState contiene una Variable y una Funcion
    -------------------------------------------------- */
    const [ counter, setCounter ] = useState( 0 );

    /* 
    incrementar() Ejecuta la funcion al Carga el Docuemento
    incrementar   Se Ejecuta al dar Click
    */
    
    /* Funcion Aumentar
    -------------------------------------------------- */
    const incrementar = () => {

        // Setear el useState opcion #1
        setCounter( counter + 1 );

        // Setear el useState opcion #2
        //setCounter( (c) => c + 1 );
    }

    /* Funcion Reiniciar
    -------------------------------------------------- */
    const reiniciar = () => setCounter( valor );

    /* Funcion Disminuir
    -------------------------------------------------- */
    const disminuir = () => setCounter( counter > 0 ? counter - 1 : 0 );    

    return (
        <>
            <h1>Counter App </h1>
            <h2>{ counter }</h2>
            <button onClick={ incrementar } >Agregar</button>
            <button onClick={ reiniciar   } >Reiniciar</button>
            <button onClick={ disminuir   } >Quitar</button>
        </>
    );   

}

CounterApp.propTypes = {
    valor: PropTypes.number
}

export default CounterApp;