import "./App.css";
import Titulo from "./Titulo";

function App() {
  return (
    <div>
      <Titulo></Titulo>
      <video width="80%" height="80%" autoPlay muted loop>
        <source src="/white0000-0250.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      
    </div>
  );
}

export default App;
