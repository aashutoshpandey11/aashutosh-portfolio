// src/components/Hero.jsx
import React from "react";
import "../styles/Hero.css";
import profile from "../assets/Myprofile.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="page-container">

        {/* NAVBAR */}
        <header className="navbar">
          <h2 className="brand">A P</h2>

          <ul className="nav-links">
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </header>

        {/* HERO CONTENT */}
        <div className="hero-content">

          {/* IMAGE */}
          <div className="hero-image">
            <img src={profile} alt="Aashutosh Pandey" />
          </div>

          {/* TEXT */}
          <div className="hero-text">
            <p className="intro">Hello, I'm</p>

            <h1>
              Aashutosh <br /> Pandey
            </h1>

            <h3>Computing Graduate | Future Cloud & AI Engineer</h3>

            <div className="hero-buttons">
              <button className="btn-outline">Download CV</button>
              <button className="btn-solid">Contact Info</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
