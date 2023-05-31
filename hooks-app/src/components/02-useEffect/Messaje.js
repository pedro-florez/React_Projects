
import React, { useEffect, useState } from 'react';

const Messaje = () => {

    const [state, setState] = useState({
        x: 0,
        y: 0
    }); 
    
    const { x, y } = state;

    useEffect(() => {        

        const mouseMove = (e) => {

            const Coords = { x: e.x, y: e.y };

            setState( Coords );
        }        

        // Obtener coordenadas del mouse X | Y
        window.addEventListener( 'mousemove', mouseMove );

        console.log('🚀 Componente Montado');        
        
        return () => {
            
            // Eliminar coordenadas del mouse X | Y
            window.removeEventListener( 'mousemove', mouseMove );
            
            console.log('🚀 Componente Desmontado');
        }
    }, []);

    return (
        <>
            <h1>Eres Genial!</h1>
            <p>
                X: { x } Y: { y }
            </p>
        </>
    );
}

export default Messaje;
