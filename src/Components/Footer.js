import React from 'react'
import './Footer.css'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'


function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footerc">
                    <h3>© Prateek Kukreja Website 2023</h3>
                    <div className="footer-socials">
                        <a aria-label="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/theprateekkukreja/">
                            <BsLinkedin />
                        </a>
                        <a aria-label="github" target="_blank" rel="noreferrer" href="https://github.com/prateekwho">
                            <BsGithub />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
