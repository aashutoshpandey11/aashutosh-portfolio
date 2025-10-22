// src/components/Hero.jsx
import React from "react";
import "../styles/Hero.css";
import profile from "../assets/Myprofile.png";

const Hero = () => {
  return (
    <section className="hero">

      {/* NAVBAR */}
      <header className="navbar">
        <h2 className="brand">Aashutosh Pandey</h2>

        <ul className="nav-links">
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </header>

      {/* MAIN CONTENT */}
      <div className="hero-container">

        {/* IMAGE */}
        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>

        {/* TEXT */}
        <div className="hero-text">
          <p className="intro">Hello, I'm</p>
          <h1>Aashutosh Pandey</h1>
          <h3>Computing Graduate | Future Cloud & AI Engineer</h3>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <button className="btn-outline">Download CV</button>
            <button className="btn-solid">Contact Info</button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="socials">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
