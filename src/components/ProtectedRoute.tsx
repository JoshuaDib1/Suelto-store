import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAdmin = false 
}) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  // Si está cargando, mostrar un indicador de carga
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  // Si no hay usuario autenticado, redirigir al login
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si se requiere admin, verificar si el usuario tiene ese rol
  // Esto es un ejemplo, deberías implementar tu propia lógica para verificar roles
  if (requireAdmin) {
    // Aquí puedes verificar si el usuario es admin
    // Por ejemplo, verificando un campo en Firestore o en los claims del usuario
    // Por ahora, simplemente devolvemos el children
  }

  // Si el usuario está autenticado (y es admin si se requiere), mostrar el contenido protegido
  return <>{children}</>;
};

export default ProtectedRoute; 