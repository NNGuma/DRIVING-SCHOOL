import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaSignInAlt, FaHome, FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom"; // <-- fixed import
import "../index.css";

export default function SchoolHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const activeClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "Admin";
    setUserName(storedName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    sessionStorage.clear();
    navigate("/"); // redirect to landing page
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo-container" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="icon burger-icon" />
          ) : (
            <GiHamburgerMenu className="icon burger-icon" />
          )}
          <span className="logo">Driving School SaaS</span>
        </span>
      </div>

      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <NavLink to="/school" className={activeClass}>
          <FaHome className="icon" title="Home" />
        </NavLink>

        <NavLink to="/school/learners" className={activeClass}>
          Driving Schools
        </NavLink>

        <NavLink to="/school/instructors" className={activeClass}>
          Subscriptions
        </NavLink>

        <NavLink to="/school/courses" className={activeClass}>
          Courses
        </NavLink>

        <span className="user-greeting">
          <FaUserCircle className="icon" /> Hello, {userName}
        </span>

        <FaSignInAlt
          className="icon"
          title="Logout"
          style={{ cursor: "pointer" }}
          onClick={handleLogout}
        />
      </div>
    </nav>
  );
}
