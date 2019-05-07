import React from 'react';
import NavBar from './components/navbar/navbar';
import './App.css';
import Home from './pages/home';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
