
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLogout } from '../../actions/auth';
import { cleanerCalendar } from '../../actions/events';

const Navbar = () => {

    const { name  } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    /* Logout Cerrar Sesion
    -------------------------------------------------- */
    const handleLogout = () => {

        dispatch( startLogout() );

        dispatch( cleanerCalendar() );
    }

    return (
        <div className="navbar navbar-dark bg-dark mb-4">

            <span className="navbar-brand">
                { name }
            </span>

            <button 
                className="btn btn-danger"
                onClick={ handleLogout }
            >
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir </span>
            </button>
            
        </div>
    );
}

export default Navbar;
