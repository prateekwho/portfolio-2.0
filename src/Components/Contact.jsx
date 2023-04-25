import React from "react";
import "./Contact.css";
import { BsMailbox2 } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-title">
          <p>contact</p>
          <h3>Don't hesitate to reach out to me! 📞</h3>
        </div>
        <div className="contact-icons">
          <div className="contact-iconbox">
            <span>
              <BsMailbox2 />
            </span>
            <div className="contact-info">
              <h3>Mail</h3>
              <a href="mailto:prateekkukreja@outlook.com">
                prateekkukreja@outlook.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
