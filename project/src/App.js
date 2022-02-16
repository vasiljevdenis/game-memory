import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Results/>
      <Cards/>
      </div>
    </div>
  );
}

export default App;
