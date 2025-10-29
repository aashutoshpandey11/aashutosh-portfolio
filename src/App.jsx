// src/App.jsx
import React from 'react';
import './App.css'; // Your global styles
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      {/* Add other components like Projects, Contact, etc. here */}
    </div>
  );
}

export default App;