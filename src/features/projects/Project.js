import "./Project.css";
// React
import { useState, useEffect } from "react";
// Routing
import { useParams } from "react-router-dom";
// Data
import { projects } from "../../data/projectsData";
// Image gallery
import ImageGallery from "react-image-gallery";

export default function Project(props) {
  // Formatted data
  const [projectImages, setProjectImages] = useState(null);
  // Hooks
  const { id } = useParams();

  useEffect(() => {
    // Format project images
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
        </div>
  
        <div id="project-images-wrapper">
          <ImageGallery 
            items={ projectImages }
            showFullscreenButton={ false }
            showPlayButton={ false }/>
        </div>
      </div>
    );
  }
};