import React from 'react';
import './App.css';
import About from './components/About/About';
import HeaderBottom from './components/headerBottom/HeaderBottom';
import Download from './components/Download/Download';
import Project from './components/Project/Project';
import Section from './components/section/Section';

function App() {
  return (
    <div className="App">
      <HeaderBottom/>
      <About/>
      <Section/>
      <Project/>
      <Download/>
    </div>
  );
}

export default App;
