<<<<<<< HEAD
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaUser, FaSignInAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // ✅
=======
// Header.jsx
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaUser, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ important import
>>>>>>> 4c26943c9401305839bd66d60abc1c07c4c77a92
import "../index.css";

export default function Header() {
   
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Left: Logo + Burger */}
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

      {/* Right: Navigation links */}
      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
<<<<<<< HEAD
        <a href="#features" className="nav-link" onClick={closeMenu}>
          Features
        </a>
        <a href="#how-it-works" className="nav-link" onClick={closeMenu}>
          How It Works
        </a>
        <a href="#pricing" className="nav-link" onClick={closeMenu}>
          Pricing
        </a>

        {/* ✅ Contact Link */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={closeMenu}
        >
          Contact Us
        </NavLink>

        {/* ✅ Auth Route Links */}
        <NavLink
          to="/auth"
          onClick={closeMenu}
          className="nav-link icon-link"
          title="Admin Login"
        >
          <FaUser className="icon" />
        </NavLink>

        <NavLink
          to="/auth"
          onClick={closeMenu}
          className="nav-link icon-link"
          title="Learner Login"
        >
          <FaSignInAlt className="icon" />
        </NavLink>
=======
        <a href="#features" className="nav-link">
          Features
        </a>
        <a href="#how-it-works" className="nav-link">
          How It Works
        </a>
        <a href="#pricing" className="nav-link">
          Pricing
        </a>
        <a href="Instructor" className="nav-link">
          Contact
        </a>

        {/* Admin Login Link */}
        <Link to="/Student" title="Admin Login" className="icon-link">
          <FaUser className="icon" />
        </Link>

        {/* Learner Login Link — goes to Auth.jsx */}
        <Link to="Auth" title="Learner Login" className="icon-link">
          <FaSignInAlt className="icon" />
        </Link>
>>>>>>> 4c26943c9401305839bd66d60abc1c07c4c77a92
      </div>
    </nav>
  );
}
