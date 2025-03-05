import React from 'react';
import InstagramProfileEmbed from '../../components/InstagramFeed/InstagramEmbed';

const Work: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black text-white pt-[120px] pb-10 px-4">
        <div className="max-w-6xl w-full mx-auto px-2 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-rampart text-pink-500 mb-6 sm:mb-8 animate-pulse">
            REMODELANDO
          </h1>
          
          <div className="w-16 sm:w-24 h-1 bg-pink-500 mx-auto mb-8 sm:mb-12"></div>
          
          {/* Contenido en dos columnas */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
            {/* Columna izquierda - Instagram */}
            <div className="w-full md:w-1/2 bg-black-100 rounded-lg p-4 sm:p-6 shadow-lg flex justify-center">
              <div className="instagram-container overflow-hidden">
                <InstagramProfileEmbed />
              </div>
            </div>
            
            {/* Columna derecha - Logo */}
            <div className="w-full md:w-1/2 bg-black-900 rounded-lg p-4 sm:p-6 shadow-lg flex flex-col items-center justify-center">
              <div className="logo-container mb-4 sm:mb-6">
                <img 
                  src="/sueltochico.png" 
                  alt="Suelto Store" 
                  className="mx-auto cursor-pointer w-auto max-w-full"
                  style={{ maxHeight: '250px', height: 'auto' }}
                />
              </div>
              <p className="text-lg sm:text-xl text-pink-300 mt-4">
                Estamos trabajando para brindarte la mejor experiencia. ¡Pronto tendremos novedades!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
