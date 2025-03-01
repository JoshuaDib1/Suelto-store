import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

// Componentes de página
import Work from './pages/Work/Work';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        </Route>
        
        <Route element={<MinimalLayout />}>
          <Route path="/" element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
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
