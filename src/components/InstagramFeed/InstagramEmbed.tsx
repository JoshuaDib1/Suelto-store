import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

interface InstagramProfileEmbedProps {
  profileUrl: string;
  className?: string;
}

const InstagramProfileEmbed: React.FC<InstagramProfileEmbedProps> = ({ 
  profileUrl,
  className = '' 
}) => {
  // Extraer el nombre de usuario de la URL
  const usernameMatch = profileUrl.match(/instagram\.com\/([^\/]+)/);
  const username = usernameMatch ? usernameMatch[1] : 'suelto_cl';
  
  return (
    <div className={`instagram-profile-embed ${className}`}>
      <div className="flex justify-center">
        <InstagramEmbed 
          url={profileUrl} 
          width={355} 
          captioned
        />
      </div>
    </div>
  );
};

export default InstagramProfileEmbed; 