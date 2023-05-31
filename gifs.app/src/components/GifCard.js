
import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

const GifCard = ({ search }) => {

    /* LLamando al ( Custom Hook )
    ** Renombra Const Data => data:images */
    const { data:images, loading, notFound } = useFetchGifs( search );
    
    return (
        <> 
            <h3>Busqueda "{ search }"</h3>

            { loading && <div className="loader">Cargando...</div> }

            {
                notFound &&
                <div className="mensaje">
                    <h1>¡Oops!</h1>
                    <h2>Lo sentimos, no hemos encontrado resultados para tu búsqueda.</h2>
                </div> 
            }

            <div className="card-grid">
                {
                    images.map( image =>                   
                        
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    )
                }
            </div>
        </>
    )
}

export default GifCard;
