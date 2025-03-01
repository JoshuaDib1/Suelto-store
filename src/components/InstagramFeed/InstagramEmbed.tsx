import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';


const InstagramProfileEmbed: React.FC = () => {
  // URL directa del embed de Instagram
  const embedUrl = "https://www.instagram.com/suelto.cl/p/DGOFg-GOG9g";

  return (
    <div className={`instagram-profile-embed`}>
     <InstagramEmbed url={embedUrl} width={328} />
    </div>
  );
};

export default InstagramProfileEmbed; 