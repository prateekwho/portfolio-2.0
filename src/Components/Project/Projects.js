import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import Img1 from '../../images/chipku.png'

function Projects() {

  const items = [
      { projectName : "Chipku",
        projectDescription : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi soluta et autem magni, a ratione laboriosam quam eligendi harum rem. Lorem ipsum dolor sit amet. ", 
        stackName : {
          stack1 : 'CSS',
          stack2 : 'Vanilla JS'
        },
        img : Img1,
        links : {
          github : "",
          website : ""
        }
      },
      {
        projectName : "Chipku",
        projectDescription : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi soluta et autem magni, a ratione laboriosam quam eligendi harum rem. Lorem ipsum dolor sit amet. ", 
        stackName : {
          stack1 : 'CSS',
          stack2 : 'Vanilla JS'
        },
        img : Img1,
        links : {
          github : "",
          website : ""
        }
      }
  ]


  let card = items.map((item) => {      
    return < ProjectCard 
    Name = {item.projectName}
    Description = {item.projectDescription} 
    Stack1 = {item.stackName.stack1}
    Stack2 = {item.stackName.stack2}
    Img = {item.img}
    Github = {item.links.github}
    Website = {item.links.website}
    />
  })

  return (
    <section id='projects' className='project'>
      <div className="container">
        <div className="project-content">
          <p>portfolio</p>
          <h3>Each project presents a unique development challenge. 🧩</h3>
          <div className="projects-grid">
            {card}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
