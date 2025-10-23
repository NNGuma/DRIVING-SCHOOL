import React from "react";
import { Link } from "react-router-dom";
import { FaCar, FaBookOpen, FaChartLine, FaCreditCard, FaUser, FaHeadset } from "react-icons/fa";
import "../index.css";

export default function LearnerDashboard() {
  return (
    <div className="crud-container">
      <h2>Welcome, Learner 👋</h2>
      <p>Manage your driving lessons, payments, and progress.</p>

      <div className="dashboard-grid">
        <Link to="/learner/book" className="dashboard-card">
          <FaCar className="feature-icon" /> Book Lesson
        </Link>
        <Link to="/learner/lessons" className="dashboard-card">
          <FaBookOpen className="feature-icon" /> My Lessons
        </Link>
        <Link to="/learner/progress" className="dashboard-card">
          <FaChartLine className="feature-icon" /> Progress Tracker
        </Link>
        <Link to="/learner/payments" className="dashboard-card">
          <FaCreditCard className="feature-icon" /> Payment History
        </Link>
        <Link to="/learner/profile" className="dashboard-card">
          <FaUser className="feature-icon" /> My Profile
        </Link>
        <Link to="/learner/support" className="dashboard-card">
          <FaHeadset className="feature-icon" /> Support
        </Link>
      </div>
    </div>
  );
}
