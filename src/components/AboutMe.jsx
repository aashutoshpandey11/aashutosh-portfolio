// src/components/AboutMe.jsx
import React from 'react';
// Ensure you have 'react-icons' installed: npm install react-icons
import { RiAwardFill } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';

// Import the external CSS file
import '../styles/AboutMe.css'; 

// *** FIX ***: Import the image using the ES6 import method
// This is necessary for Vite/Webpack to correctly bundle the asset.
import profileImage from '../assets/Myprofile2.png'; 

const AboutMe = () => {
  return (
    <section className="about-me-section" id="about">
      <h4 className="about-me-subtitle">Get To Know More</h4>
      <h2 className="about-me-title">About Me</h2>

      <div className="about-me-container">
        <div className="about-me-image-container">
          <img
            // *** FIX ***: Use the imported variable name instead of require()
            src={profileImage}
            alt="Profile"
            className="about-me-image"
          />
        </div>

        <div className="about-me-content-container">
          <div className="about-me-cards-container">
            <div className="about-me-card">
              <RiAwardFill className="about-me-icon" />
              <h3 className="about-me-card-title">Experience</h3>
              <p className="about-me-card-text">2+ years</p>
              <p className="about-me-card-text">Frontend Development</p>
            </div>

            <div className="about-me-card">
              <IoIosPeople className="about-me-icon" />
              <h3 className="about-me-card-title">Education</h3>
              <p className="about-me-card-text">B.Sc. Bachelors Degree</p>
              <p className="about-me-card-text">M.Sc. Masters Degree</p>
            </div>
          </div>

          <p className="about-me-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis sapiente hic odio quod voluptates alias nobis excepturi perspiciatis natus voluptatem exercitationem voluptas quibusdam deserunt impedit libero rerum adipisci, quos nisi velit sunt! Quibusdam magni laborum perspiciatis, eaque quos nobis?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;