import React from "react";
import "./Projects.css";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import { items } from "./ProjectData";

function Projects() {
  return (
    <section id="project">
      <div className="container">
        <div className="project-content">
          <p>projects</p>
          <h3>Each project presents a unique development challenge. 🧩</h3>
          <div className="projects-grid">
            {items.map((item) => (
              <div key={item.id} className="pro-card">
                <div className="pro-img">
                  <img src={item.img} alt="website" />
                </div>
                <div className="pro-text">
                  <h3>{item.name}</h3>
                  <h4>{item.des}</h4>
                  <div className="stack">
                    <h4>{item.stack[0]}</h4>
                    <h4>{item.stack[1]}</h4>
                  </div>
                  <div className="links">
                    <a
                      aria-label=""
                      rel="noreferrer"
                      target="_blank"
                      href={item.links.github}
                    >
                      <BsGithub />
                    </a>
                    <a
                      aria-label=""
                      rel="noreferrer"
                      target="_blank"
                      href={item.links.website}
                    >
                      <BsBoxArrowUpRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
