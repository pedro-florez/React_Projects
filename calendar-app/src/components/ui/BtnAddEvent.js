
import React from 'react';
import { useDispatch } from 'react-redux';

import { eventActive } from '../../actions/events';
import { openModalEvent } from '../../actions/ui';

const BtnAddEvent = () => {

    const dispatch = useDispatch();

    const handleOpenModalEvent = () => {

        // Vaciar el Event Active
        dispatch( 
            eventActive( null )
        );

        dispatch( openModalEvent() );
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleOpenModalEvent }
        >
            <i className="fas fa-plus"></i>
        </button>
    );
}

export default BtnAddEvent;