import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      // No es necesario redirigir, ya que el cambio en el estado de autenticación
      // debería ser manejado por el AuthContext y el enrutamiento protegido
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

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
        <div className="flex items-center" style={{ gap: '50px' }}>
          <Link 
            to="/products" 
            className="text-pink-500 text-2xl font-rampart transition-colors duration-300 hover:text-pink-300"
          >
            Productos
          </Link>
          <Link 
            to="/about" 
            className="text-pink-500 text-2xl font-rampart transition-colors duration-300 hover:text-pink-300"
          >
            Nosotros
          </Link>
          
          {/* Área de usuario */}
          <div className="flex items-center ml-6">
            {currentUser ? (
              <div className="flex items-center">
                <span className="text-white mr-4">
                  Hola, <span className="text-pink-500 font-semibold">{currentUser.displayName || 'Usuario'}</span>
                </span>
                <button 
                  onClick={handleLogout}
                  className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
                >
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
              >
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
