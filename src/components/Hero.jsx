import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/Myprofile.png";

const Hero = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white py-3">
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
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
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
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT - IMAGE */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src={profile}
                alt="Aashutosh Pandey"
                className="rounded-circle img-fluid"
                style={{ maxWidth: "300px" }}
              />
            </div>

            {/* RIGHT - TEXT */}
            <div className="col-md-6">
              <p className="text-muted mb-2">Hello, I'm</p>
              <h1 className="fw-bold">Aashutosh Pandey</h1>
              <p className="fs-5 text-muted">
                Computing Graduate | Future Cloud & AI Engineer
              </p>

              {/* Buttons */}
              <div className="d-flex gap-3 mt-4">
                <a
                  href="/cv.pdf"
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
              <div className="d-flex gap-4 mt-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark fs-4"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark fs-4"
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
