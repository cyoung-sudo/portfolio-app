import "./Projects.css";
// Components
import ProjectsDisplay from "../../components/displays/ProjectsDisplay";
// Data
import { projects } from "../../data/projectsData";

export default function Projects(props) {
  return (
    <div id="projects">
      <div id="projects-header">
        <h1>Projects</h1>
      </div>

      <div id="projects-display-wrapper">
        <ProjectsDisplay projects={ projects }/>
      </div>
    </div>
  );
};