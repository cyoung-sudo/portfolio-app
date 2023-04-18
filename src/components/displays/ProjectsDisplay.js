import "./ProjectsDisplay.css";

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
                <div className="projectsDisplay-about">{ project.about }</div>
                <div className="projectsDisplay-actions">
                  <button>View</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};