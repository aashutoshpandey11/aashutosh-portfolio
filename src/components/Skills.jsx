import React from "react";
import { CheckCircleFill } from "react-bootstrap-icons";

const Skills = () => {
  return (
    <section id="skills" className="container py-5">
      <div className="text-center mb-5">
        <p className="text-muted mb-1">Explore My</p>
        <h2 className="fw-bold">Skills</h2>
      </div>

      <div className="row g-4">
        {/* Frontend */}
        <div className="col-md-6">
          <div className="border rounded-4 p-4 h-100">
            <h5 className="text-center fw-semibold mb-4">
              Frontend Development
            </h5>

            <div className="row">
              <Skill name="HTML" level="Experienced" />
              <Skill name="CSS" level="Experienced" />
              <Skill name="SASS" level="Intermediate" />
              <Skill name="JavaScript" level="Basic" />
              <Skill name="TypeScript" level="Basic" />
              <Skill name="Material UI" level="Intermediate" />
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="col-md-6">
          <div className="border rounded-4 p-4 h-100">
            <h5 className="text-center fw-semibold mb-4">
              Backend Development
            </h5>

            <div className="row">
              <Skill name="PostgreSQL" level="Basic" />
              <Skill name="Node JS" level="Intermediate" />
              <Skill name="Express JS" level="Intermediate" />
              <Skill name="Git" level="Intermediate" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ name, level }) => (
  <div className="col-6 mb-3 d-flex align-items-start gap-2">
    <CheckCircleFill size={18} className="mt-1" />
    <div>
      <strong>{name}</strong>
      <div className="text-muted small">{level}</div>
    </div>
  </div>
);

export default Skills;
