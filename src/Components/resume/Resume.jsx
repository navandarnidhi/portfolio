import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Resume</h2>

      <div className="resume__container grid">
        <section className="timeline grid" aria-labelledby="education-heading">
          <h3 className="timeline__heading" id="education-heading">Education</h3>
          {Data.filter((val) => val.category === "education").map((val) => (
            <Card
              key={val.id}
              icon={val.icon}
              title={val.title}
              year={val.year}
              desc={val.desc}
            />
          ))}
        </section>

        <section className="timeline grid" aria-labelledby="experience-heading">
          <h3 className="timeline__heading" id="experience-heading">Experience</h3>
          {Data.filter((val) => val.category === "experience").map((val) => (
            <Card
              key={val.id}
              icon={val.icon}
              title={val.title}
              year={val.year}
              desc={val.desc}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Resume;
