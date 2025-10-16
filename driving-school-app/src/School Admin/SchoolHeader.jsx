import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaHome, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../index.css";
import {
  FaCar,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function SchoolHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "User";
    setUserName(storedName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    sessionStorage.clear();
    window.location.href = "/";
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const activeClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <>
      {/* Header */}
      <nav className="navbar">
        <div className="navbar-left">
          <GiHamburgerMenu
            className="icon burger-icon"
            onClick={toggleSidebar}
          />
          <span className="logo">Driving School SaaS</span>
        </div>

        <div className="navbar-right">
          <NavLink to="/school" className={activeClass}>
            <FaHome className="icon" /> 
          </NavLink>
          <NavLink to="/school/learners" className={activeClass}>
            Learners
          </NavLink>
          <NavLink to="/school/instructors" className={activeClass}>
            Instructors
          </NavLink>
          <NavLink to="/school/courses" className={activeClass}>
            Courses
          </NavLink>

          <span className="user-greeting">
            <FaUserCircle className="icon" /> Hello, {userName}
          </span>
        </div>
      </nav>

      {/* Sidebar + Overlay */}
      {sidebarOpen && (
        <>
          <div
            className="sidebar-overlay active"
            onClick={toggleSidebar}
          ></div>

          <aside className="sidebar-slide active">
            <div className="sidebar-header">
              <span className="close-btn" onClick={toggleSidebar}>
                <FaTimes />
              </span>
              <h2>
                <FaCar /> Driving School Admin
              </h2>
            </div>

            <ul className="sidebar-menu">
              
              <li>
                <NavLink
                  to="/school/learners"
                  className={activeClass}
                  onClick={toggleSidebar}
                >
                  <FaUserGraduate /> Students
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school/instructors"
                  className={activeClass}
                  onClick={toggleSidebar}
                >
                  <FaChalkboardTeacher /> Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school/courses"
                  className={activeClass}
                  onClick={toggleSidebar}
                >
                  <FaBook /> Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school/BookingTable"
                  className={activeClass}
                  onClick={toggleSidebar}
                >
                  <FaCalendarAlt /> Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school/payments"
                  className={activeClass}
                  onClick={toggleSidebar}
                >
                  <FaMoneyBillWave /> Payments
                </NavLink>
              </li>
            </ul>

            {/* Logout moved to sidebar */}
            <div className="sidebar-logout" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </div>
          </aside>
        </>
      )}
    </>
  );
}
