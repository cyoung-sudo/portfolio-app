import "./Project.css";
// React
import { useState, useEffect } from "react";
// Routing
import { useParams } from "react-router-dom";
// Data
import { projects } from "../../data/projectsData";
// Image gallery
import ImageGallery from "react-image-gallery";
// Icons
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

export default function Project(props) {
  // Formatted data
  const [projectImages, setProjectImages] = useState(null);
  // Hooks
  const { id } = useParams();

  //----- Format project images on load
  useEffect(() => {
    let formattedImages = projects[id].images.map(url => {
      return {
        original: url
      };
    });

    setProjectImages(formattedImages);
  }, []);

  if(projectImages) {
    return (
      <div id="project">
        <div id="project-header">
          <h1>{ projects[id].name }</h1>
          <div className="project-header-deployment">
            {projects[id].deployed &&
              <span className="project-header-deployment-true">
                Deployed<span><AiFillCheckCircle/></span>
              </span>
            }

            {!projects[id].deployed &&
              <span className="project-header-deployment-false">
                Not Deployed<span><AiFillCloseCircle/></span>
              </span>
            }
          </div>
        </div>
  
        <div id="project-images-wrapper">
          <ImageGallery 
            items={ projectImages }
            showFullscreenButton={ false }
            showPlayButton={ false }/>
        </div>

        <div id="project-info">
          <div>
            <span className="project-info-label">Description: </span>
            { projects[id].about }
          </div>
          {projects[id].website !== "" &&
            <div>
              <span className="project-info-label">Website: </span>
              <a href={projects[id].website} target="_blank" rel="noreferrer">{ projects[id].website }</a>
            </div>
          }
          <div className="project-info-tech">
            <ul>
              <span className="project-info-label">Tech: </span>
              {projects[id].tech.map((tech, idx) => (
                <li key={ idx }>
                  { tech }
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="project-info-label">Client Repo: </span>
            <a href={projects[id].repos.client} target="_blank" rel="noreferrer">{ projects[id].repos.client }</a>
          </div>

          <div>
            <span className="project-info-label">Server Repo: </span>
            <a href={projects[id].repos.server} target="_blank" rel="noreferrer">{ projects[id].repos.server }</a>
          </div>
        </div>
      </div>
    );
  }
};