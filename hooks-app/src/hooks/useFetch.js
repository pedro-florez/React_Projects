
import { useEffect, useRef, useState } from 'react';

/* Custom Hook useFetch ( hacer Peticiones Api )
-------------------------------------------------- */
const useFetch = ( url ) => {

    const isMounted = useRef( true );

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    // Actualizar Referencia    
    useEffect( () => {

        // Si se Desmonta el componente
        return () => {
            isMounted.current = false;
        }
    }, []);

    // Escuchar el cambio de la Url
    useEffect( () => {

        setState({
            data: null,
            loading: true,
            error: null
        });

        // Peticion API
        fetch( url )
            .then( res => res.json() )
            .then( data => {                

                if ( isMounted.current ) {
                    
                    setState({
                        loading: false,
                        error: null,
                        data
                    });

                }else {
                    console.log('🚀 El componente no se pudo renderizar');
                }
            });
        
    }, [url]);

    return state;
}

export default useFetch;
