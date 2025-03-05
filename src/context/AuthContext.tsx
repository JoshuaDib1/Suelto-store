import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { 
  loginWithEmailAndPassword, 
  registerWithEmailAndPassword, 
  logoutUser, 
  resetPassword 
} from '../firebase/auth';

// Definir la interfaz para el contexto
interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ user: User | null; error: any }>;
  register: (email: string, password: string, displayName: string) => Promise<{ user: User | null; error: any }>;
  logout: () => Promise<{ success: boolean; error: any }>;
  resetPassword: (email: string) => Promise<{ success: boolean; error: any }>;
}

// Crear el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

// Props para el proveedor
interface AuthProviderProps {
  children: ReactNode;
}

// Componente proveedor
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Efecto para escuchar cambios en el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Limpiar la suscripción al desmontar
    return unsubscribe;
  }, []);

  // Funciones de autenticación
  const login = async (email: string, password: string) => {
    return await loginWithEmailAndPassword(email, password);
  };

  const register = async (email: string, password: string, displayName: string) => {
    return await registerWithEmailAndPassword(email, password, displayName);
  };

  const logout = async () => {
    return await logoutUser();
  };

  const resetUserPassword = async (email: string) => {
    return await resetPassword(email);
  };

  const value = {
    currentUser,
    loading,
    login,
    register,
    logout,
    resetPassword: resetUserPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 