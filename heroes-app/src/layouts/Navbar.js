
import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
import types from '../types/types';

const Navbar = () => {

    const { user:{ nombre}, dispatch } = useContext( AuthContext );

    // Hook de React Router DOM para ver el History que esta en las Props
    const history = useHistory();
    //console.log('🚀 history', history);

    const handleLogout = () => {

        dispatch({
            type: types.logout
        });

        history.replace('/login');
    }

    return (
        <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark mb-3">

            <div className="container">
            
                <Link className="navbar-brand" to="/">
                    Asociaciones
                </Link>

                <div className="navbar-collapse">

                    <div className="navbar-nav">

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/marvel">
                            Marvel
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/dc">
                            DC
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/search">
                            Search
                        </NavLink>

                    </div>

                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">

                    <ul className="navbar-nav flex-row flex-wrap ms-md-auto">

                        <li className="nav-item nav-link text-info">
                            { nombre }
                        </li>

                        <button                             
                            className="nav-item nav-link btn" 
                            onClick={ handleLogout }>
                            Logout
                        </button>

                    </ul>
                    
                </div>

            </div>

        </nav>
    )
}

export default Navbar;
