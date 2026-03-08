import React, { useState } from "react";
import { FaCalendarPlus, FaSave } from "react-icons/fa";
import "../TableStyles.css";

export default function BookLesson() {

  /* Existing data in the system */
  const schools = [
    "Cape Town Driving School",
    "Elite Driving Academy",
    "SafeDrive School"
  ];

  const instructors = [
    "John Smith",
    "Sarah Daniels",
    "Michael Jacobs"
  ];

  const [lesson, setLesson] = useState({
    school: "",
    instructor: "",
    date: "",
    time: "",
    vehicleType: "Manual",
  });

  const handleChange = (e) =>
    setLesson({ ...lesson, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!lesson.school || !lesson.instructor || !lesson.date || !lesson.time)
      return alert("All fields are required.");

    alert("Lesson booked successfully!");

    setLesson({
      school: "",
      instructor: "",
      date: "",
      time: "",
      vehicleType: "Manual",
    });
  };

  return (
    <div className="crud-container booking-container">
      <h2>
        <FaCalendarPlus className="feature-icon" /> Book a Lesson
      </h2>

      <div className="booking-table-wrapper">
        <table className="booking-table">
          <tbody>

            {/* Driving School */}
            <tr>
              <td className="booking-label">Driving School</td>
              <td className="booking-field">
                <select
                  name="school"
                  value={lesson.school}
                  onChange={handleChange}
                >
                  <option value="">Select School</option>
                  {schools.map((school, index) => (
                    <option key={index} value={school}>
                      {school}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            {/* Instructor */}
            <tr>
              <td className="booking-label">Instructor</td>
              <td className="booking-field">
                <select
                  name="instructor"
                  value={lesson.instructor}
                  onChange={handleChange}
                >
                  <option value="">Select Instructor</option>
                  {instructors.map((ins, index) => (
                    <option key={index} value={ins}>
                      {ins}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td className="booking-label">Date</td>
              <td className="booking-field">
                <input
                  type="date"
                  name="date"
                  value={lesson.date}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td className="booking-label">Time</td>
              <td className="booking-field">
                <input
                  type="time"
                  name="time"
                  value={lesson.time}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td className="booking-label">Vehicle Type</td>
              <td className="booking-field">
                <select
                  name="vehicleType"
                  value={lesson.vehicleType}
                  onChange={handleChange}
                >
                  <option>Manual</option>
                  <option>Automatic</option>
                </select>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <button className="save-btn booking-save-btn" onClick={handleSubmit}>
        <FaSave /> Confirm Booking
      </button>
    </div>
  );
}