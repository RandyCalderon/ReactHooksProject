import React from 'react';
import NavBar from './components/navbar/navbar';
import Trending from './components/anime/trending';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Trending />
    </div>
  );
};

export default App;
