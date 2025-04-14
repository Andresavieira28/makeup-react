import React from 'react';
import './App.css';
import RandomQuote from './components/RandomQuote'; 
import ContadorSimples from './components/ContadorSimples';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomQuote />
        <ContadorSimples />
      </header>
    </div>
  );
}

export default App;
