import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/sueltochico.png" alt="Logo" className="logo-image" />
          </Link>
        </div>
        
        <div className="navbar-links">
          <Link to="/producto" className="nav-link">Producto</Link>
          <Link to="/caracteristicas" className="nav-link">Características</Link>
          <Link to="/tienda" className="nav-link">Tienda</Link>
          <Link to="/empresa" className="nav-link">Empresa</Link>
        </div>
        
        <div className="navbar-auth">
          <Link to="/login" className="login-button">Iniciar sesión →</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 