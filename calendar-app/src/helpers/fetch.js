
/* Helper Realizar Peticiones
----------------------------------------- */
const baseUrl = process.env.REACT_APP_API_URL;

export const fetchSinToken = ( endpoint, data, method = 'GET' ) => {
    
    // endpoint = /auth | /event 
    const url = `${ baseUrl }/${ endpoint }`;

    // Validar Metodo Http & Realizar Peticion
    if ( method === 'GET' ) {

        return fetch( url );

    }else {

        // POST / PUT / DELETE
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

export const fetchConToken = ( endpoint, data = {}, method = 'GET' ) => {
    
    const url = `${ baseUrl }/${ endpoint }`;

    // Obtener Token del localStorage
    const token = localStorage.getItem('token') || '';

    // Validar Metodo Http & Realizar Peticion
    if ( method === 'GET' ) {

        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        });

    }else {

        // POST / PUT / DELETE
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }
}
