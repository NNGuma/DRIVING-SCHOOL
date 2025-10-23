import React from "react";
import { Link } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaUserGraduate, FaTasks, FaUserCog } from "react-icons/fa";
import "../index.css";

export default function InstructorDashboard() {
  return (
    <div className="crud-container">
      <h2>Welcome, Instructor 👋</h2>
      <p>Manage your lessons, learners, and schedule.</p>

      <div className="dashboard-grid">
        <Link to="/instructor/lessons" className="dashboard-card">
          <FaBook className="feature-icon" /> My Lessons
        </Link>
        <Link to="/instructor/progress" className="dashboard-card">
          <FaTasks className="feature-icon" /> Manage Progress
        </Link>
        <Link to="/instructor/learners" className="dashboard-card">
          <FaUserGraduate className="feature-icon" /> Learners
        </Link>
        <Link to="/instructor/schedule" className="dashboard-card">
          <FaCalendarAlt className="feature-icon" /> My Availability
        </Link>
        <Link to="/instructor/InstructorProfile" className="dashboard-card">
          <FaUserCog className="feature-icon" /> My Profile
        </Link>
      </div>
    </div>
  );
}
