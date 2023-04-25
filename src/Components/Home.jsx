import React from "react";
import "./Home.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1>Front-End Developer</h1>
            <p>
              Hi, I'm Prateek Kukreja. A passionate Front-end <br /> Developer
              based in Faridabad, India. 📍
            </p>
            <span>
              <a
                aria-label="linkedin"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/theprateekkukreja/"
              >
                <BsLinkedin />
              </a>
              <a
                aria-label="github"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/prateekwho"
              >
                <BsGithub />
              </a>
            </span>
          </div>
          <div className="home-img"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
