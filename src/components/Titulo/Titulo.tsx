import React from 'react';
import { Link } from 'react-router-dom';

const Titulo: React.FC = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50 text-center bg-black text-white py-4">
      <h1 className="m-0 p-0">
        <Link to="/">
          <img 
            src="/sueltochico.png" 
            alt="Suelto Store" 
            className="mx-auto cursor-pointer"
            style={{ height: '350px' }}
          />
        </Link>
      </h1>
    </div>
  );
};
  
export default Titulo;