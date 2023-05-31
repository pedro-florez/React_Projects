
import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import 'moment/locale/es';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

import { startAddEvent, eventActive, startUpdateEvent } from '../../actions/events';
import { closeModalEvent } from '../../actions/ui';

const now  = moment().minutes(0).seconds(0).add(1, 'hours'); // 3:00:00
const last = now.clone().add(1, 'hours'); // Clonando el now 4:00:00

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: last.toDate()
}

const FormCreateEvent = () => {

    const dispatch = useDispatch();

    const { activeEvent } = useSelector( state => state.calendar );

    const [ fechaInicial, setFechaInicial ]  = useState( now.toDate() );
    const [ fechaFinal, setFechaFinal ]      = useState( last.toDate() );
    const [ validTitle, setValidTitle ]      = useState( true );
    const [ formState, setFormState ]        = useState( initEvent );

    const { title, notes, start, end } = formState;

    // Colocar La Informacion en el Modal ( Editar )
    useEffect( () => {    

        if ( activeEvent ) {
            setFormState( activeEvent );
        }
        
    }, [ activeEvent, setFormState ]);
    
    // Cambiar Valores del Formulario
    const handleInputChange = ({ target }) => {
        
        setFormState({
            ...formState,
            [target.name]: target.value
        });        
    }

    // Cambiar Fecha de Inicio
    const handleStartDateChange = (e) => {
        
        setFechaInicial ( e );

        setFormState({
            ...formState,
            start: e
        });
    }   
    
    // Cambiar Fecha Fin
    const handleEndDateChange = (e) => {
        setFechaFinal ( e );   
        
        setFormState({
            ...formState,
            end: e
        });
    }
    
    // Cerrar el Modal Crear Evento
    const handleCloseModal = () => {

        dispatch( closeModalEvent() );

        // Limpiar Evento Activo
        dispatch( eventActive( null ) );
        
        setFormState( initEvent );
    }

    // Guardar | Actualizar Evento en BD 
    const handleSubmitEvent = (e) => {

        e.preventDefault();

        const dateStart = moment( start );
        const dateEnd   = moment( end );

        // Validar Fechas
        if ( dateStart.isSameOrAfter( dateEnd ) ) {
            return Swal.fire('Error', 'La fecha fin debe ser mayor la fecha de inicio.', 'error');            
        }

        // Validar Title
        if ( title.trim().length < 2 ) {
            return setValidTitle( false );         
        }            
        
        setValidTitle( true );

        // TODO: Crear Evento en BD

        // Actualizar Evento
        if ( activeEvent ) {
            
            dispatch( 
                startUpdateEvent( formState )
            );            
        } 

        // Guardar Evento
        else {            
            
            dispatch(
                startAddEvent( formState )
            );
        }

        // Cerrar el Modal
        dispatch( closeModalEvent() );

        setFormState( initEvent );
    }

    return (
        <>
            <div className="modal-header">

                <h3 className="modal-title">
                    { activeEvent ? 'Editar evento' : 'Nuevo evento' }
                </h3>

                <button 
                    type="button" 
                    className="close"
                    onClick={ handleCloseModal }>
                    <span>&times;</span>
                </button>

            </div>

            <div className="modal-body">
            
                <form onSubmit={ handleSubmitEvent }>

                    <div className="form-group">
                        <label>Fecha y hora inicio</label>
                        <DateTimePicker
                            className="form-control"
                            onChange={ handleStartDateChange }
                            value={ start ? start : fechaInicial }
                        />
                    </div>

                    <div className="form-group">
                        <label>Fecha y hora fin</label>
                        <DateTimePicker
                            className="form-control"
                            onChange={ handleEndDateChange }
                            value={ end ? end : fechaFinal }
                            minDate={ start ? start : fechaInicial } // Validar que no sea Igual a la fecha inicial
                        />
                    </div>

                    <hr />
                    <div className="form-group">
                        <label>Titulo y notas</label>
                        <input 
                            type="text"
                            className={ `form-control ${ !validTitle && 'is-invalid' }` }
                            name="title"
                            value={ title }
                            onChange={ handleInputChange }
                            autoComplete="off"
                            placeholder="Título del evento"
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                    </div>

                    <div className="form-group">
                        <textarea 
                            type="text" 
                            className="form-control"
                            name="notes"
                            value={ notes }
                            onChange={ handleInputChange }
                            rows="5"
                            placeholder="Notas..."
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                    >                        
                        <span>
                            { activeEvent ? 'Actualizar' : 'Guardar' } 
                        </span>
                    </button>

                </form>

            </div>
        </>
    );
}

export default FormCreateEvent;