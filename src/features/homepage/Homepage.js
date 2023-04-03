import "./Homepage.css";
// Routing
import { Link } from "react-router-dom";

export default function Homepage(props) {
  return (
    <div id="homepage">
      <div id="homepage-filter">
        <div id="homepage-profile">
          <div id="homepage-profile-img">
            <img src="data:image/jpeg;base64,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" alt="Profile picture"/>
          </div>

          <ul id="homepage-profile-info">
            <li>Christopher Young</li>
            <li>College: ...</li>
            <li>Degree: ...</li>
          </ul>
        </div>

        <div id="homepage-projects">
          <h1>Projects</h1>

          <div>

          </div>

          <Link to="/projects">View Projects</Link>
        </div>

        <div id="homepage-contact">
          <h1>Contact</h1>
          <ul>
            <li>Email: ...</li>
            <li>LinkedIn: ...</li>
            <li>Github: ...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};