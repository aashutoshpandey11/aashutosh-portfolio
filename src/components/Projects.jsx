import React from "react";

// ✅ Correct variable names
import webProjects from "../assets/Web-projects.jpeg";
import appProjects from "../assets/App-projects.jpeg";
import aiMlProjects from "../assets/AI-ML-projects.jpeg";

const Projects = () => {
  return (
    <section className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <p className="text-muted mb-1">Browse My Recent</p>
        <h2 className="fw-bold">Projects</h2>
      </div>

      {/* Project Cards size 300*300 */}
      <div className="row g-4">
        <ProjectCard
          title="Web Projects"
          image={webProjects}
          github="#"
          demo="#"
        />

        <ProjectCard
          title="App Projects"
          image={appProjects}
          github="#"
          demo="#"
        />

        <ProjectCard
          title="AI / ML Projects"
          image={aiMlProjects}
          github="#"
          demo="#"
        />
      </div>
    </section>
  );
};

const ProjectCard = ({ title, image, github, demo }) => {
  return (
    <div className="col-md-4">
      <div className="border rounded-4 p-3 h-100 text-center">
        <img
          src={image}
          alt={title}
          className="img-fluid rounded-3 mb-3"
        />

        <h5 className="fw-semibold mb-3">{title}</h5>

        <div className="d-flex justify-content-center gap-3">
          <a
            href={github}
            className="btn btn-outline-dark btn-sm rounded-pill px-3"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={demo}
            className="btn btn-outline-dark btn-sm rounded-pill px-3"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
