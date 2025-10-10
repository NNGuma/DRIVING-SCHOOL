
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaUser, FaSignInAlt } from "react-icons/fa";
import "../index.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Left: Logo + Burger */}
      <div className="navbar-left">
        <span className="logo-container" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="icon burger-icon" /> : <GiHamburgerMenu className="icon burger-icon" />}
          <span className="logo">Driving School SaaS</span>
        </span>
      </div>

      {/* Right: Navigation links */}
      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <a href="#features" className="nav-link">Features</a>
        <a href="#how-it-works" className="nav-link">How It Works</a>
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#contact" className="nav-link">Contact</a>
        <FaUser className="icon" title="Admin Login" />
        <FaSignInAlt className="icon" title="Learner Login" />
      </div>
    </nav>
  );
}
