import React from "react";
import "../index.css";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page fade-in">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>
          CONTACT <span>US</span>
        </h1>
      </section>

      {/* Contact Layout */}
      <section className="contact-container">
        {/* LEFT SIDE - Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p>0XX XXX XXXX</p>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>info@Redefined-itgroup.co.za</p>
          </div>

          <div className="contact-item">
            <FaClock className="contact-icon" />
            <div>
              <p className="business-hours-title">Business Hours</p>
              <p>Monday – Sunday: 5am – 7pm</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Contact" required />
            </div>

            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Message" required></textarea>

            <div className="interest-section">
              <label>I am Interested in</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="interest" /> Learners License
                </label>
                <label>
                  <input type="radio" name="interest" /> Drivers License Lessons
                </label>
                <label>
                  <input type="radio" name="interest" /> Drivers Refresher Lessons
                </label>
                <label>
                  <input type="radio" name="interest" /> Other
                </label>
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}
