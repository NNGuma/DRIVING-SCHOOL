import React from "react";
import "../index.css";
import background from "../assets/background.png"; 

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Simplifying Driving School Management</h1>
          <p>Book, manage, and track lessons with our cloud-based SaaS platform.</p>
          <div className="hero-cta">
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-secondary">Book a Lesson</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Course & Lesson Management</h3>
            <p>Create, schedule, and track lessons effortlessly.</p>
          </div>
          <div className="feature-card">
            <h3>Online Booking</h3>
            <p>Learners can book lessons in real-time with payment integration.</p>
          </div>
          <div className="feature-card">
            <h3>Instructor & Learner Dashboard</h3>
            <p>Monitor schedules, progress, and payments at a glance.</p>
          </div>
          <div className="feature-card">
            <h3>Multi-Tenant Support</h3>
            <p>Manage multiple schools from a single platform.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
     
      <section className="how-it-works" id="how-it-works">
        <h2 style={{ textAlign: "center" }}>How It Works</h2>

        <div className="steps">
          <div className="step">
            <h3>Learners</h3>
            
            <ol>
              <li>Sign up and browse courses</li>
              <li>Book a lesson and pay online</li>
              <li>Track progress in dashboard</li>
            </ol>
          </div>
          <div className="step">
            <h3>Schools</h3>
            <ol>
              <li>Register your driving school</li>
              <li>Add courses and instructors</li>
              <li>Manage bookings and monitor analytics</li>
            </ol>
          </div>
        </div>
      </section>

      
    </div>
  );
}
