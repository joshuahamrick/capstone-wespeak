import { Link } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="./">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/explore">Explore</Link>
      </li>
      <li className="navbar-item">
        <Link to="/likes">Likes</Link>
      </li>
      <li className="navbar-item">
        <Link to="/profile">Profile</Link>
      </li>
      <li className="navbar-item">
        <Link to="/wespeak">Wespeak</Link>
      </li>
    </ul>
  );
};
