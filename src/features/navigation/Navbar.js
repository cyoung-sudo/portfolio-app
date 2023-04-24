import "./Navbar.css";
// Routing
import { Link, NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div id="navbar">
      <div id="navbar-logo">
        <Link to="/">Portfolio</Link>
      </div>
      
      <ul id="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link-active" : undefined}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            end
            to="projects"
            className={({ isActive }) =>
              isActive ? "navbar-link-active" : undefined}>
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};