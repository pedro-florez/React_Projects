
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../ui/Navbar';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import BtnAddEvent from '../ui/BtnAddEvent';
import BtnDelEvent from '../ui/BtnDelEvent';
import { messages } from '../../helpers/calendar-lang-es';
import { openModalEvent } from '../../actions/ui';
import { eventActive, startLoadingEvents } from '../../actions/events';

moment.locale('es');

const localizer = momentLocalizer( moment );

const CalendarScreen = () => {

    const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'month' );

    const dispatch = useDispatch();

    const { uid } = useSelector( state => state.auth );
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { modalOpen } = useSelector( state => state.ui );

    // Cargar Eventos
    useEffect(() => {

        dispatch( startLoadingEvents() );
        
    }, [ dispatch ]);

    // Event Selecionar al Dar un Click ( Seleccionar )
    const onSelectedClick = (e) => {
        dispatch( eventActive(e) );
    }

    // Event al Dar Doble Click
    const onDoubleClick = () => {
        dispatch( openModalEvent() );
    }

    // Al Dar Click Fuera del Evento
    const onSelectedSlot = (e) => {
        dispatch( eventActive(null) );
    }

    // Event Para Saber la Vista Actual
    const onViewChange = (e) => {

        setLastView(e);

        // Guardar en el LocalStorage
        localStorage.setItem('lastView', e);
    }

    // Styles de al Caja de Eventos
    const eventStyleGetter = ( event, start, end, isSelected ) => {

        const style = {
            backgroundColor: ( uid === event.user._id ) ? '#367CF7' : '#fd7e14',
            borderRadius: '0px',
            opacity: ( activeEvent?.id === event.id ) ? 1 : 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div className="calendar-screen">

            <Navbar />

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ messages } // Textos en Españos
                eventPropGetter={ eventStyleGetter }
                selectable={ true } // Para Poder Usar el ( onSelectSlot )
                onSelectEvent={ onSelectedClick } 
                onSelectSlot={ onSelectedSlot } // Sabar Cuando le de Click a Fuera del Evento
                onDoubleClickEvent={ onDoubleClick }
                onView={ onViewChange } // Obtener la Vista Actual
                view={ lastView } // Mostrar Vista
                components={{
                    event: CalendarEvent
                }}
            />

            <BtnAddEvent />

            { ( activeEvent && !modalOpen ) && <BtnDelEvent /> }

            <CalendarModal />

        </div>
    );
}

export default CalendarScreen;