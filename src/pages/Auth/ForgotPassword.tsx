import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Por favor, ingresa tu correo electrónico');
      return;
    }
    
    try {
      setError(null);
      setMessage(null);
      setLoading(true);
      
      const result = await resetPassword(email);
      
      if (result.error) {
        // Manejar diferentes tipos de errores
        switch (result.error.code) {
          case 'auth/user-not-found':
            setError('No existe una cuenta con este correo electrónico');
            break;
          case 'auth/invalid-email':
            setError('Correo electrónico inválido');
            break;
          default:
            setError(result.error.message);
        }
        return;
      }
      
      // Mostrar mensaje de éxito
      setMessage('Se ha enviado un enlace para restablecer tu contraseña a tu correo electrónico');
      
    } catch (err) {
      setError('Ocurrió un error al enviar el correo. Por favor, intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-rampart text-pink-500">Recuperar Contraseña</h2>
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
        </div>
        
        {error && (
          <div className="bg-red-500 text-white p-3 rounded-lg mb-4">
            {error}
          </div>
        )}
        
        {message && (
          <div className="bg-green-500 text-white p-3 rounded-lg mb-4">
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
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
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition duration-300 disabled:opacity-50"
          >
            {loading ? 'Enviando...' : 'Enviar Enlace de Recuperación'}
          </button>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-white">
            <Link to="/login" className="text-pink-400 hover:text-pink-300">
              Volver al Inicio de Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 