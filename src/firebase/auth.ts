import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  updateProfile,
  User
} from 'firebase/auth';
import { auth } from './config';

// Registro de usuario con email y contraseña
export const registerWithEmailAndPassword = async (
  email: string, 
  password: string, 
  displayName: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Actualizar el perfil del usuario con el nombre
    await updateProfile(user, {
      displayName: displayName
    });
    
    return { user, error: null };
  } catch (error: any) {
    console.error("Error en registro:", error.code, error.message);
    
    // Mensaje personalizado para el error de operación no permitida
    if (error.code === 'auth/operation-not-allowed') {
      return {
        user: null,
        error: {
          code: error.code,
          message: "La autenticación por email/contraseña no está habilitada en Firebase. Por favor, contacta al administrador."
        }
      };
    }
    
    return { 
      user: null, 
      error: {
        code: error.code,
        message: error.message
      } 
    };
  }
};

// Inicio de sesión con email y contraseña
export const loginWithEmailAndPassword = async (
  email: string, 
  password: string
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    console.error("Error en login:", error.code, error.message);
    
    // Mensaje personalizado para errores comunes
    if (error.code === 'auth/invalid-credential') {
      return {
        user: null,
        error: {
          code: error.code,
          message: "Credenciales inválidas. Por favor, verifica tu correo y contraseña."
        }
      };
    }
    
    return { 
      user: null, 
      error: {
        code: error.code,
        message: error.message
      } 
    };
  }
};

// Cerrar sesión
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true, error: null };
  } catch (error: any) {
    return { 
      success: false, 
      error: {
        code: error.code,
        message: error.message
      } 
    };
  }
};

// Enviar email para restablecer contraseña
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, error: null };
  } catch (error: any) {
    return { 
      success: false, 
      error: {
        code: error.code,
        message: error.message
      } 
    };
  }
};

// Obtener el usuario actual
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

// Verificar si el usuario está autenticado
export const isAuthenticated = (): boolean => {
  return auth.currentUser !== null;
}; 