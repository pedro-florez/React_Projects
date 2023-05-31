
import Swal from "sweetalert2";

import types from "../types";
import { fetchConToken } from "../helpers/fetch";
import changeDateEventos from "../helpers/convertir-a-date";

/* Mostrar Eventos de la DB
-------------------------------------------------- */
export const startLoadingEvents = () => {
    
    return async( dispatch ) => {

        try {

            // Mostar Todos los Eventos DB            
            const res  = await fetchConToken( 'event' );
            const body = await res.json();

            if ( body.ok ) {

                const eventos = changeDateEventos( body.eventos );
                
                // Cargar los Eventos en el Reducer Calendar
                dispatch( 
                    loadEvents( eventos )
                );
            }
            
        }catch ( err ) {
            console.log( err );          
        }     
    }    
}

/* Guardar Evento en Mongo DB
-------------------------------------------------- */
export const startAddEvent = ( event ) => {
    
    return async( dispatch, getState ) => {

        const { uid, name } = getState().auth;

        try {

            // Guardar en DB            
            const res  = await fetchConToken( 'event', event, 'POST' );
            const body = await res.json();

            if ( body.ok ) {

                // Setear el Evento ( se olvido una Propiedad )
                event.id = body.evento.id;
                event.user = { 
                    _id: uid,
                    name 
                }

                // Guardar en el Reducer
                dispatch( 
                    addNewEvent( event )
                );

                // Mensajes de Exito
                Swal.fire('¡Buen trabajo!', 'Evento guardado con exito.', 'success');
            }
            
        }catch ( err ) {

            // Mensajes de Error
            Swal.fire('Error', err, 'error');

            console.log( err );            
        }        
    }    
}

/* Actualizar Evento en Mongo DB
-------------------------------------------------- */
export const startUpdateEvent = ( event ) => {
    
    return async( dispatch ) => {

        try {

            // Actualizar en DB
            const res  = await fetchConToken( `event/${ event.id }`, event, 'PUT' );
            const body = await res.json();

            if ( body.ok ) {

                // Actualizar en el Reducer
                dispatch( 
                    eventUpdated( event )
                );

                // Mensajes de Exito
                Swal.fire('¡Buen trabajo!', 'Evento actualizado con exito.', 'success');

            }else {

                // Limpiar Evento Activo
                dispatch( 
                    eventActive( null )
                );

                // Mensajes de Error
                Swal.fire('Error', body.msg, 'error');
            }
            
        }catch ( err ) {

            // Limpiar Evento Activo
            dispatch( 
                eventActive( null )
            );

            // Mensajes de Error
            Swal.fire('Error', err, 'error');

            console.log( err );            
        }        
    }    
}

/* Eliminar Evento en Mongo DB
-------------------------------------------------- */
export const startDeleteEvent = () => {
    
    return async( dispatch, getState ) => {

        // Obtener el ID del Evento a Eliminar
        const { activeEvent } = getState().calendar;

        try {

            // Eliminar en DB
            const res  = await fetchConToken( `event/${ activeEvent.id }`, {}, 'DELETE' );
            const body = await res.json();

            if ( body.ok ) {

                // Eliminar en el Reducer
                dispatch( eventDeleted() );

                // Mensajes de Exito
                Swal.fire('¡Buen trabajo!', 'Evento eliminado con exito.', 'success');

            }else {

                // Limpiar Evento Activo
                dispatch(
                    eventActive( null )
                );

                // Mensajes de Error
                Swal.fire('Error', body.msg, 'error');
            }
            
        }catch ( err ) {

            // Limpiar Evento Activo
            dispatch(
                eventActive( null )
            );

            // Mensajes de Error
            Swal.fire('Error', err, 'error');

            console.log( err );          
        }      
    }    
}

const loadEvents = ( events ) => ({
    type: types.eventLoad,
    payload: events
});

const addNewEvent = ( event ) => ({
    type: types.eventAddNew,
    payload: event    
});

export const eventActive = ( event ) => ({
    type: types.eventActive,
    payload: event    
});

const eventUpdated = ( event ) => ({
    type: types.eventUpdate,
    payload: event    
});

const eventDeleted = () => ({
    type: types.eventDelete   
});

export const cleanerCalendar = () => ({
    type: types.eventCleaner   
});
