// src/components/Hero.jsx

import React from "react";
import "../styles/Hero.css";  // import the CSS
import profile from "../assets/Myprofile.png";  // import the image

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <nav className="navbar">
          <div className="logo">W.</div>
          <ul className="nav-links">
            <li className="active">Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Clients</li>
          </ul>
          <button className="contact-btn">Contact Me</button>
        </nav>

        <div className="hero-main">
          <div className="hero-text">
            <p>Hello,</p>
            <h1>
              I'm <span>Aashutosh Pandey</span>
            </h1>
            <h2>Software Engineer</h2>

            <p className="hero-desc">
            I am a Computing graduate with a strong passion for Cloud Computing, DevOps, and Artificial Intelligence.
            </p>

            <p className="hero-desc">
            I enjoy exploring new technologies and building projects that combine creativity and technical skills.
            </p>

            <p className="hero-desc">
            I am eager to contribute to innovative solutions and grow in the tech industry.
            </p>

            <button className="hire-btn">Hire me</button>
          </div>
          <div className="hero-image">
            <img src={profile} alt="Smith" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
