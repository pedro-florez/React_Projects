
import Swal from "sweetalert2";

import types from "../types";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { almacenarToken } from "../helpers/almacenar-jwt";

/* Login en API Calendar MERN
-------------------------------------------------- */
export const startLogin = ( email, password ) => {
    
    return async( dispatch ) => {

        // Realizar Peticion al API
        const res = await fetchSinToken( 'auth', { email, password }, 'POST' );

        // Obtener Datos
        const body = await res.json();
        //console.log( body );    
        
        if ( body.ok ) {

            // Almacenar el Token en localStorage
            almacenarToken( body.token );

            // Guardar User en Reducer Auth
            dispatch( 
                login({
                    uid:  body.uid,
                    name: body.name
                })
            );  

        }else {

            // Mensajes de Error de la API
            Swal.fire('Error', body.msg, 'error');
        }
    }    
};

/* Guardar User en la DB
-------------------------------------------------- */
export const startRegister = ( name, email, password ) => {
    
    return async( dispatch ) => {

        // Realizar Peticion al API
        const res = await fetchSinToken( 'auth/register', { name, email, password }, 'POST' );

        // Obtener Datos
        const body = await res.json();
        
        if ( body.ok ) {
            
            // Almacenar el Token en localStorage
            almacenarToken( body.token );

            // Guardar User en Reducer Auth
            dispatch( 
                login({
                    uid:  body.uid,
                    name: body.name
                })
            );  

        }else {

            // Mensajes de Error de la API
            Swal.fire('Error', body.msg, 'error');
        }
    }    
};

/* Revalidar ( TOKEN )
-------------------------------------------------- */
export const startChecking = () => {
    
    return async( dispatch ) => {

        try {

            // Realizar Peticion al API
            const res = await fetchConToken( 'auth/renew' );

            // Obtener Datos
            const body = await res.json();
            
            if ( body.ok ) {

                // Almacenar el Token en localStorage
                almacenarToken( body.token );

                // Guardar User en Reducer Auth
                dispatch( 
                    login({
                        uid:  body.uid,
                        name: body.name
                    })
                );  

            }else {

                // Informar de que ya termino la Verificacion del Token
                dispatch( checkingFinish() );
            }
            
        }catch ( err ) {

            console.log( err )
        }        
    }    
};

/* Guardar el User en el Reducer
-------------------------------------------------- */
const login = ( user ) => ({
    type: types.authlogin,
    payload: user
});

/* Cambiar el Checking a False en el Reducer
-------------------------------------------------- */
export const checkingFinish = () => ({
    type: types.authCheckingFinish
});

/* Logout Cerrar Sesion ( LocalStorage )
-------------------------------------------------- */
export const startLogout = () => {
    
    return ( dispatch ) => {

        // Vaciar el LocalStorage ( Token )
        localStorage.clear();

        // Actualizar el Reducer Auth
        dispatch( logout() );
    }
};

/* Logout Cerrar Sesion Reducer Auth
-------------------------------------------------- */
const logout = () => ({
    type: types.authlogout
});
