import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
    <nav className={`w-full fixed top-0 left-0 z-50 bg-black py-3 ${className}`}>
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between px-6">
        {/* Logo a la izquierda */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img 
              src="/sueltochico.png" 
              alt="Suelto Store" 
              className="cursor-pointer"
              style={{ height: '100px' }}
            />
          </Link>
        </div>
        
        {/* Enlaces a la derecha */}
        <div className="flex" style={{ gap: '100px' }}>
          <Link 
            to="/productos" 
            className="text-pink-500 text-2xl font-rampart transition-colors duration-300 hover:text-pink-300"
          >
            Productos
          </Link>
          <Link 
            to="/nosotros" 
            className="text-pink-500 text-2xl font-rampart transition-colors duration-300 hover:text-pink-300"
          >
            Nosotros
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
