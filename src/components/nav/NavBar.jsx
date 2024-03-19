import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useEffect, useState } from "react";
export const NavBar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <ul className="navbar">
      <div>
        <li className="navbar-item">
          <Link to="./">Home</Link>
        </li>
      </div>
      <div>
        <li className="navbar-item">
          <Link to="/newpost">New Post</Link>
        </li>
      </div>
      <div>
        <li className="navbar-item">
          <Link to="/explore">Explore</Link>
        </li>
      </div>
      <div>
        <li className="navbar-item">
          <Link to="/profile">Profile</Link>
        </li>
      </div>
      <div>
        <li
          className={`navbar-item ${
            currentPage === "/wespeak" ? "active" : ""
          }`}
          id="wespeak"
        >
          <Link to="/wespeak">Wespeak</Link>
        </li>
      </div>
    </ul>
  );
};
