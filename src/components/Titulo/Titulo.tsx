import React from 'react';
import './Titulo.css';

interface TituloProps {
  text?: string;
  className?: string;
}

const Titulo: React.FC<TituloProps> = ({ 
  text = "Suelto Store", 
  className = '' 
}) => {
  return (
    <div className={`titulo-container ${className}`}>
      <h1 className="titulo-text">{text}</h1>
    </div>
  );
};

export default Titulo; 