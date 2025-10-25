// src/App.jsx
import React from 'react';
import './App.css'; // Your global styles
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      {/* Add other components like Projects, Contact, etc. here */}
    </div>
  );
}

export default App;