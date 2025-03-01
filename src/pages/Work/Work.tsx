import React from 'react';
import InstagramProfileEmbed from '../../components/InstagramFeed/InstagramEmbed';


const Work: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black text-white pt-[30px] pb-10">
        <div className="max-w-6xl w-full mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-rampart text-pink-500 mb-8 animate-pulse">
            REMODELANDO
          </h1>
          
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-12"></div>
          
          {/* Contenido en dos columnas */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Columna izquierda - Instagram */}
            <div className="w-full md:w-1/2 bg-black-100 rounded-lg p-6 shadow-lg">
              <div className="instagram-container">
                <InstagramProfileEmbed/>
              </div>
            </div>
            
            {/* Columna derecha - Logo */}
            <div className="w-full md:w-1/2 bg-black-900 rounded-lg p-6 shadow-lg flex flex-col items-center justify-center">
              <div className="logo-container mb-6">
                <img 
                  src="/sueltochico.png" 
                  alt="Suelto Store" 
                  className="mx-auto cursor-pointer"
                  style={{ height: '350px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
