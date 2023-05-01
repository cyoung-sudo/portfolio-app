import "./ProjectsDisplay.css";
// Routing
import { Link } from "react-router-dom";
// Icons
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

export default function ProjectsDisplay({ projects }) {
  return (
    <div id="projectsDisplay">
      {(projects.length > 0) &&
        <ul id="projectsDisplay-list">
          {projects.map((project, idx) => (
            <li key={ idx }>
              <div className="projectsDisplay-image">
                <img src={ project.images[0] } alt=""/>
              </div>

              <div className="projectsDisplay-content">
                <div className="projectsDisplay-name">{ project.name }</div>
                <div className="projectsDisplay-deployment">
                  {project.deployed &&
                    <span className="projectsDisplay-deployment-true">
                      Deployed<span><AiFillCheckCircle/></span>
                    </span>
                  }

                  {!project.deployed &&
                    <span className="projectsDisplay-deployment-false">
                      Not Deployed<span><AiFillCloseCircle/></span>
                    </span>
                  }
                </div>
                <div className="projectsDisplay-about">{ project.about }</div>
                <div className="projectsDisplay-actions">
                  <Link to={`/projects/${idx}`}>View</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};