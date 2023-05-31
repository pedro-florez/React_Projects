
import moment from 'moment';

/* Convertir la Fecha de ( String ) a ( Date ) para los Eventos
-----------------------------------------------------------------*/
const changeDateEventos = ( events = [] ) => {

    // Devolver un Nuevo Objeto con las Fechas de type Date
    return events.map(
        ( event ) => ({
            ...event,
            end:   moment( event.end ).toDate(),
            start: moment( event.start ).toDate()
        })
    );
}

export default changeDateEventos;
