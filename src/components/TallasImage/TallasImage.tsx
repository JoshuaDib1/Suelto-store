import React from 'react';
import './TallasImage.css';

interface TallasImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const TallasImage: React.FC<TallasImageProps> = ({ 
  src, 
  alt = "Tabla de tallas", 
  className = '' 
}) => {
  return (
    <div className={`tallas-container ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="tallas-image"
      />
    </div>
  );
};

export default TallasImage; 