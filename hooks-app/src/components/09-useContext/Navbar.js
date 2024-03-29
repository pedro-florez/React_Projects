
import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    return (        
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">

            <div className="container-fluid"> 

                <Link className="navbar-brand" to="/">useContext()</Link>         

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav">
                        <NavLink exact activeClassName="active" className="nav-link" to="/">
                            Home  
                        </NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="/about"> 
                            About 
                        </NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="/login"> 
                            Login
                        </NavLink>
                    </div>

                </div>

            </div>
            
        </nav>        
    )
}

export default Navbar;
