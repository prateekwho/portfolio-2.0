import './ProjectCard.css';
import {BsGithub , BsBoxArrowUpRight} from 'react-icons/bs'

function  ProjectCard(props) {
  return (
    
        <div className="pro-card">
            <img src={props.Img} alt="" className='pro-img'/>
            <div className='pro-text'>
                <h3>{props.Name}</h3>
                <h4>{props.Description}</h4>
                <div className="stack">
                    <h4>{props.Stack1}</h4>
                    <h4>{props.Stack2}</h4>
                </div>
                <div className="links">
                    <a aria-label="github" rel="noreferrer" target="_blank" href={props.Github}>
                        <BsGithub/>
                    </a>
                    <a aria-label="" rel="noreferrer" target="_blank" href={props.Website}>
                        <BsBoxArrowUpRight/>
                    </a>
                </div>
            </div>
        </div>
  );
}

export default ProjectCard