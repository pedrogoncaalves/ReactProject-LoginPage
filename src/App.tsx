import React from 'react';
import './App.css';
import { Router,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header do Site</h1>
        <nav>
          ...
        </nav>


      </header>
      <hr/>
      <Routes>
        <Router path="/" element={<Home/>}/>
        <Router path="/" element={<Private/>}/>
      </Routes>
    </div>
  );
}

export default App;
