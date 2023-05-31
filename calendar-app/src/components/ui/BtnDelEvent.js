
import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { startDeleteEvent } from '../../actions/events';

const BtnDelEvent = () => {

    const dispatch = useDispatch();

    const handleDeleteEvent = () => {

        Swal.fire({
            title: '¿Está seguro(a) de eliminar este evento?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: '¡Sí, bórralo!',
        }).then((result) => {

            if (result.isConfirmed) {

                // Eliminar Evento
                dispatch( startDeleteEvent() );
            }
        });
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDeleteEvent }
        >
            <i className="fas fa-trash"></i>
            <span> Eliminar evento </span>
        </button>
    );
}

export default BtnDelEvent;
