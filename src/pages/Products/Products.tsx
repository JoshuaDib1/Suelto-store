import React from 'react';

const VideoItem: React.FC = () => {
  return (
    <div style={{ width: '250px', maxWidth: '250px', overflow: 'hidden', margin: '0 10px' }}>
      <video 
        style={{ width: '250px', maxWidth: '250px', objectFit: 'cover', borderRadius: '8px' }}
        controls={false}
        autoPlay
        muted
        loop
      >
        <source src="/chase.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
    </div>
  );
};

const Products: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full pt-[120px] animate-fadeIn">
      <h1 className="text-3xl font-bold text-white mb-8">Nuestros Productos</h1>
      
      {/* Contenedor de los videos estrictamente en fila */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%',
        overflowX: 'auto',
        marginBottom: '40px'
      }}>
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </div>

      {/* Imagen de tallas */}
      <div className="w-full max-w-3xl mx-auto mt-8 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Guía de Tallas</h2>
        <img 
          src="/tallas.png" 
          alt="Guía de tallas" 
          className="w-full object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Products;