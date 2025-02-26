import React from 'react';
import './Home.css';
import Titulo from '../../components/Titulo/Titulo';
import Video from '../../components/Video/Video';
import TallasImage from '../../components/TallasImage/TallasImage';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Titulo />
      <Video src="/chase.mp4" />
      <TallasImage src="/tallas.png" />
    </div>
  );
};

export default Home; 