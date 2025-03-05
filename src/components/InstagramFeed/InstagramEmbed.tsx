import React, { useState, useEffect } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const InstagramProfileEmbed: React.FC = () => {
  // URL directa del embed de Instagram
  const embedUrl = "https://www.instagram.com/suelto.cl/p/DGOFg-GOG9g";
  
  // Estado para almacenar el ancho del contenedor
  const [width, setWidth] = useState(328);
  
  // Función para actualizar el ancho basado en el tamaño de la ventana
  useEffect(() => {
    const updateWidth = () => {
      // Limitar el ancho máximo a 500px y mínimo a 280px
      const containerWidth = Math.min(
        Math.max(window.innerWidth < 768 ? window.innerWidth - 48 : 328, 280),
        500
      );
      setWidth(containerWidth);
    };
    
    // Actualizar el ancho inicialmente
    updateWidth();
    
    // Actualizar el ancho cuando cambie el tamaño de la ventana
    window.addEventListener('resize', updateWidth);
    
    // Limpiar el event listener
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="instagram-profile-embed w-full flex justify-center">
      <InstagramEmbed url={embedUrl} width={width} />
    </div>
  );
};

export default InstagramProfileEmbed; 