// Header.jsx
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaUser, FaSignInAlt } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
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
        <a href="#features" className="nav-link" onClick={closeMenu}>
          Features
        </a>
        <a href="#how-it-works" className="nav-link" onClick={closeMenu}>
          How It Works
        </a>
        <a href="#pricing" className="nav-link" onClick={closeMenu}>
          Pricing
        </a>

        {/* ✅ Contact Link (React Router) */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={closeMenu}
        >
          Contact Us
        </NavLink>

        {/* ✅ Profile & Login Links */}
        <Link
          to="/Student"
          onClick={closeMenu}
          className="nav-link icon-link"
          title="Student Profile"
        >
          <FaUser className="icon" />
        </Link>

        <Link
          to="/Auth"
          onClick={closeMenu}
          className="nav-link icon-link"
          title="Login"
        >
          <FaSignInAlt className="icon" />
        </Link>
      </div>
    </nav>
  );
}
