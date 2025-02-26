import React from 'react';
import './Video.css';

interface VideoProps {
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
}

const Video: React.FC<VideoProps> = ({ 
  src, 
  autoPlay = true, 
  muted = true, 
  loop = true, 
  controls = false,
  className = ''
}) => {
  return (
    <div className={`video-container ${className}`}>
      <video 
        className="video-element"
        autoPlay={autoPlay} 
        muted={muted} 
        loop={loop} 
        controls={controls}
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default Video; 