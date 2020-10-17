import React from 'react';
import {Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  justify-content-between">
            <div className="container">
                <h1><Link to={'/'} className="text-light">Base de Datos Publica de Mexico</Link></h1>
            </div>

            <Link to={"/productos/nuevo"}

                className="btn nuevo-post d-block d-md-inline-block"
            >Agregar producto &#43;
    
                </Link>
            
            
        </nav>
      );
}
 

export default Header;