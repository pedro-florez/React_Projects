
import React, { useState } from 'react';

import AddCategory from './AddCategory';
import GifCard from './GifCard';

const GifExpertApp = () => {
    
    const [categorias, setCategorias] = useState(['Naruto']);

    return (
        <>
            <h2>Giphy App</h2>
            <AddCategory setCategorias={ setCategorias } />            
            <hr/>

            {
                categorias.map( categoria =>

                    <GifCard key={ categoria } search={ categoria } />
                )
            }            
        </>
    )
}

export default GifExpertApp;
