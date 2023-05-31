
import types from '../types';

const initialState = {
    events: [],
    activeEvent: null
}

const eventReducer = ( state = initialState, { type, payload } ) => {

    switch ( type ) {

        /* Mostrar Eventos
        ------------------------------------------*/
        case types.eventLoad:
            return {
                ...state,
                events: [ ...payload ]
            };

        /* Activar Evento
        ------------------------------------------*/
        case types.eventActive:
            return {
                ...state,
                activeEvent: payload
            };

        /* Agregar Evento en Listado de Events
        ------------------------------------------*/
        case types.eventAddNew:
            return {
                ...state,
                events: [ 
                    ...state.events,
                    payload 
                ],
                activeEvent: null
            };

        /* Actualizar Evento en Listado de Events
        ------------------------------------------*/
        case types.eventUpdate:
            return {
                ...state,
                events: state.events.map(
                    event => ( event.id === payload.id ) ? payload : event
                ),
                activeEvent: null
            };

        /* Eliminar Evento en Listado de Events
        ------------------------------------------*/
        case types.eventDelete:
            return {
                ...state,
                events: state.events.filter(
                    event => ( event.id !== state.activeEvent.id )
                ),
                activeEvent: null
            };

        /* Limpiar el Calendario al Cerrar Sesion
        ------------------------------------------*/
        case types.eventCleaner:
            return initialState;

        default:
            return state;
    }
}

export default eventReducer;