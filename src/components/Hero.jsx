import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/Myprofile.png";
import cv from "../assets/Aashutosh_Pandey_CV.pdf";

const Hero = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white py-3 sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            My Portfolio
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="row align-items-center min-vh-75 mt-5">

            {/* LEFT - IMAGE */}
            <div className="col-lg-5 text-center mb-4 mb-lg-0">
              <img
                src={profile}
                alt="Aashutosh Pandey"
                className="rounded-circle img-fluid shadow"
                style={{ maxWidth: "280px" }}
              />
            </div>

            {/* RIGHT - TEXT */}
            <div className="col-lg-7 text-center text-lg-start">
              <p className="text-muted mb-2">Hello, I'm</p>

              <h1 className="fw-bold mb-2">
                Aashutosh Pandey
              </h1>

              <p className="fs-5 text-muted mb-4">
                Computing Graduate | Future Cloud & AI Engineer
              </p>

              {/* Buttons */}
              <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-4">
                <a
                  href="{cv}"
                  download
                  className="btn btn-outline-dark px-4 rounded-pill"
                >
                  Download CV
                </a>

                <a
                  href="#contact"
                  className="btn btn-dark px-4 rounded-pill"
                >
                  Contact Info
                </a>
              </div>

              {/* Social Icons */}
              <div className="d-flex justify-content-center justify-content-lg-start gap-4 fs-4">
                <a
                  href="https://github.com/aashutoshpandey11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/aashutoshpandey11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
