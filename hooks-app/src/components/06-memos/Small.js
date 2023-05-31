
import React from 'react';
//import React, { memo } from 'react';

//const Small = memo( ({ valor }) => {
const Small = React.memo( ({ valor }) => {

    /*
    ** Memo Sirve para Memorizar los Valores o Props
    ** Esto evita que el componente se renderize si no
    ** Cambian las Props
    */
    console.log('🚀 Small Renderizado');

    return ( 
        <small>{ valor }</small>
    )
});

export default Small;
