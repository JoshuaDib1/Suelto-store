import React from 'react';

interface InstagramProfileProps {
  username: string;
  profileImage: string;
  followers: number;
  following: number;
  posts: number;
  bio: string;
  photos: string[];
  className?: string;
}

const InstagramProfile: React.FC<InstagramProfileProps> = ({ 
  username, 
  profileImage, 
  followers, 
  following, 
  posts, 
  bio, 
  photos,
  className = '' 
}) => {
  return (
    <div className={`instagram-profile bg-black ${className}`}>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-rampart text-pink-500 text-center mb-8">Síguenos en Instagram</h2>
        
        <div className="w-16 h-1 bg-pink-500 mx-auto mb-10"></div>
        
        {/* Cabecera del perfil */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Foto de perfil */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-pink-500">
              <img 
                src={profileImage} 
                alt={`Perfil de ${username}`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Información del perfil */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2 font-pacifico">@{username}</h3>
              
              {/* Estadísticas */}
              <div className="flex justify-center md:justify-start gap-6 mb-4">
                <div className="text-center">
                  <span className="block text-white font-bold">{posts}</span>
                  <span className="text-gray-400 text-sm">Publicaciones</span>
                </div>
                <div className="text-center">
                  <span className="block text-white font-bold">{followers}</span>
                  <span className="text-gray-400 text-sm">Seguidores</span>
                </div>
                <div className="text-center">
                  <span className="block text-white font-bold">{following}</span>
                  <span className="text-gray-400 text-sm">Seguidos</span>
                </div>
              </div>
              
              {/* Bio */}
              <p className="text-white text-sm mb-4">{bio}</p>
              
              {/* Botón de seguir */}
              <a 
                href={`https://www.instagram.com/${username}/`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Seguir
              </a>
            </div>
          </div>
        </div>
        
        {/* Galería de fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto">
          {photos.map((photo, index) => (
            <a 
              key={index} 
              href={`https://www.instagram.com/${username}/`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden rounded-lg transform transition duration-300 hover:scale-105"
            >
              <img 
                src={photo} 
                alt={`Foto de Instagram ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
        
        {/* Botón para ver más */}
        <div className="text-center mt-10">
          <a 
            href={`https://www.instagram.com/${username}/`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Ver perfil completo
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramProfile; 