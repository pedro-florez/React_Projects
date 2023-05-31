
import { useEffect, useState } from "react";
import getGifs from '../helpers/getGifs';

/* Custom Hook
-------------------------------------------------- */
const useFetchGifs = ( search ) => {

    // Estado Inicial
    const [state, setState] = useState({
        data: [],
        loading: true,
        notFound: false
    });

    // Evitar que se Ejecute Varias veces
    useEffect(() => {

        // Realizar peticion
        getGifs( search ).then( imgs => {

            // Setear el Estado inicial
            setTimeout(() => {
        
                setState({
                    data: imgs,
                    loading: false,
                    notFound: ( imgs.length === 0 ? true : false )
                });

            }, 2000);
        });
                     
    }, [ search ]);    

    return state;
}

export default useFetchGifs;
