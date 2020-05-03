import React from 'react';
import logo from './logo.svg';
import './App.css';
import Shout from './Compnents/Shout';

function App() {
  return (
    <div className="App">
      <h1>ENLARGE what you WRITE!</h1>
      <p>Type anything in the input section and have fun by automatic enlarging of same Text...</p>
      <Shout />
    </div>
  );
}

export default App;
