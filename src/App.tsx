import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

// Componentes de página
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';

function App() {
  return (
    <Router>       
      <div className="app-container">
        <Navbar />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/nosotros" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
