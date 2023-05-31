
import types from '../types';

const initialState = {
    checking: true
}

const authReducer = ( state = initialState, { type, payload } ) => {

    switch ( type ) {

        /* Guardar User en el Redducer Auth
        --------------------------------------- */
        case types.authlogin:
            return {
                ...state,
                ...payload,
                checking: false
            };

        /* Informar de que ya termino la Verificacion del Token
        -------------------------------------------------------- */
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            };

        /* Logout Cerrar Sesion Reducer Auth
        --------------------------------------------- */
        case types.authlogout:
            return {
                checking: false
            };

        default:
            return state;
    }
}

export default authReducer;
