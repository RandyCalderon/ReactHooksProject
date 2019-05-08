import React from 'react';
import Trending from '../components/anime/trending/trending';
import Daychar from '../components/anime/daychar/daychar';
import home from './home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={home.container}>
      <Trending />
      <Daychar />
    </div>
  );
};

export default Home;
