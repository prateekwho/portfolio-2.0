import React from "react";
import "./About.css";
import Drawkit from "../images/DrawKit.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img src={Drawkit} alt="" />
          </div>
          <div className="text-side">
            <h4>About Me</h4>
            <h3>
              A dedicated Front-end Developer <br />
              based in Faridabad, India 📍
            </h3>
            <p>
              Hi there! My name is Prateek, and I'm a front-end developer with
              expertise in HTML, CSS, JavaScript, React, and Tailwind. I've
              worked on a variety of projects. When I'm not coding, I love
              hiking, reading, and experimenting with new recipes in the
              kitchen. I'm always looking for new opportunities to learn and
              grow, so feel free to reach out if you have any questions or want
              to work on a project together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
