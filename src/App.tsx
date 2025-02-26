import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

// Componentes de página
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto" />
          <Route path="/caracteristicas"  />
          <Route path="/tienda"  />
          <Route path="/empresa" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
