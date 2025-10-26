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
              <p className="about-me-card-text">1+ Year Graphic Designing</p>
              <p className="about-me-card-text">6+ Months QA in Enterprise Softwares</p>
              <p className="about-me-card-text">4+ Months Resource CO-odination Accosiate</p>
            </div>

            <div className="about-me-card">
              <IoIosPeople className="about-me-icon" />
              <h3 className="about-me-card-title">Education</h3>
              <p className="about-me-card-text">B.Sc. with First Class Honours in Computing</p>
            </div>
          </div>

          <p className="about-me-description">
           Technology is my core passion; I believe we must smartly use the AI generation to build better solutions. 
           Knowing I couldn't rely solely on academics due to high college fees, I pushed myself to work. 
           This journey began with Graphic Design, teaching me discipline and client confidence. My true pivot came as a QA Trainee at Qniverse (UK-based). 
           Facing a difficult, international environment, I refused to step back. By consistently asking for more and proving my value, my role evolved into Resource Coordination Associate. 
           I managed Jira/Azure, assigned tasks, and structured new projects—defined by my willingness to learn and grow into roles that matter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;