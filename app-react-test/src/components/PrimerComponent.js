
import React from 'react';
//import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { mensaje, numero, year } ) => {

    // Declarar Variable
    //const saludo = 'Empesaremos en unos minutos...';

    // Return Normal     
    // return <h1>Hola, Bienvenido a React Moderno.</h1>;    

    // Return Grupal Opcion #1     
    /*
    return (
        <div>        
            <h1>Hola, Bienvenido a React Moderno.</h1>
            <p>{ saludo }</p>
        </div>
    );
    */    

    // Return Grupal Opcion #2 (Etiqueta Fragment)     
    /*return (
        <Fragment>        
            <h1>Hola, Bienvenido a React Moderno.</h1>
            <p>{ saludo }</p>
        </Fragment>
    );*/    

    // Return Grupal Opcion #3    
    return (
        <>        
            <h1>Hola, Bienvenido a React Moderno Año { year }</h1>
            <p>{ mensaje } { numero }</p>
        </>
    );      
}

/* Validar Tipo de Propiedades
-------------------------------------------------- */
PrimeraApp.propTypes = {    
    mensaje: PropTypes.string.isRequired,
    numero:  PropTypes.number.isRequired
}

/* Colocar Variable por Default
-------------------------------------------------- */
PrimeraApp.defaultProps = {
    year: 2021
}

export default PrimeraApp;
