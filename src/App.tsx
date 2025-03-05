import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            } />
          <Route path="/productos" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Route>
          
          <Route element={<MinimalLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

// Layout con NavBar
function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="content">
        <Outlet /> {/* Aquí se renderiza el componente de la ruta activa */}
      </main>
    </div>
  );
}

// Layout sin NavBar
function MinimalLayout() {
  return (
    <div className="minimal-layout">
      <main className="content-full">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
