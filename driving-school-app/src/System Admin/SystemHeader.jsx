import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaHome, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsCardChecklist } from "react-icons/bs";
import { FaCrown } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import "../index.css";
import {
  FaCar,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function SystemHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "Admin";
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
          <span className="logo">Driving System SaaS</span>
        </div>

        <div className="navbar-right">
          <NavLink to="/system" className={activeClass}>
            <FaHome className="icon" /> 
          </NavLink>
         <NavLink to="/system/DrivingSchools" className={activeClass}>
            Driving Schools
          </NavLink>

          <NavLink to="/system/SubscriptionTable" className={activeClass}>
            Subscriptions
          </NavLink>

          <NavLink to="/system/UsersTable" className={activeClass}>
            Users
          </NavLink>
       <NavLink to ="/system/Profile" className={activeClass}>
         <span className="user-greeting">
            <FaUserCircle className="icon" /> Hello, {userName}
             </span>
       </NavLink>
         
            
         
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
                <FaCar /> System Admin
              </h2>
            </div>

            <ul className="sidebar-menu">
              
              <li>
                <NavLink
                  to="/system/DrivingSchools"
                  className={activeClass}
                  onClick={toggleSidebar}
                >
                 <BsCardChecklist />  Driving Schools
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/System/SubscriptionTable"
                  className={activeClass}
                  onClick={toggleSidebar}
                >
                  <FaCrown /> Subscriptions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/System/UsersTable"
                  className={activeClass}
                  onClick={toggleSidebar}
                >
                  <FaUsers /> Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/System/BookingTable"
                  className={activeClass}
                  onClick={toggleSidebar}
                >
                  <FaCalendarAlt /> Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/System/PaymentsTable"
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
