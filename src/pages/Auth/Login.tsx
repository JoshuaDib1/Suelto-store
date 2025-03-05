import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Obtener la ruta de redirección si existe
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }
    
    try {
      setError(null);
      setLoading(true);
      
      const result = await login(email, password);
      
      if (result.error) {
        // Manejar diferentes tipos de errores
        switch (result.error.code) {
          case 'auth/user-not-found':
            setError('No existe una cuenta con este correo electrónico');
            break;
          case 'auth/wrong-password':
            setError('Contraseña incorrecta');
            break;
          case 'auth/invalid-email':
            setError('Correo electrónico inválido');
            break;
          case 'auth/operation-not-allowed':
            setError('La autenticación por email/contraseña no está habilitada. Por favor, contacta al administrador.');
            break;
          case 'auth/invalid-credential':
            setError('Credenciales inválidas. Por favor, verifica tu correo y contraseña.');
            break;
          default:
            setError(result.error.message);
        }
        return;
      }
      
      // Redirigir al usuario a la página de origen o a la página principal
      navigate(from, { replace: true });
      
    } catch (err) {
      setError('Ocurrió un error al iniciar sesión. Por favor, intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-rampart text-pink-500">Iniciar Sesión</h2>
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
        </div>
        
        {error && (
          <div className="bg-red-500 text-white p-3 rounded-lg mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="tu@email.com"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="********"
              required
            />
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm">
              <Link to="/forgot-password" className="text-pink-400 hover:text-pink-300">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition duration-300 disabled:opacity-50"
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-white">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="text-pink-400 hover:text-pink-300">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 