import React, { useState } from "react";
import { FaCalendarPlus, FaSave } from "react-icons/fa";
import "../TableStyles.css";

export default function BookLesson() {
  const [lesson, setLesson] = useState({
    school: "",
    instructor: "",
    date: "",
    time: "",
    vehicleType: "Manual",
  });

  const handleChange = (e) => setLesson({ ...lesson, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!lesson.school || !lesson.date || !lesson.time) return alert("All fields are required.");
    alert("Lesson booked successfully!");
    setLesson({ school: "", instructor: "", date: "", time: "", vehicleType: "Manual" });
  };

  return (
    <div className="crud-container">
      <h2><FaCalendarPlus className="feature-icon" /> Book a Lesson</h2>
      <table>
        <tbody>
          <tr><td>Driving School</td><td><input name="school" value={lesson.school} onChange={handleChange} /></td></tr>
          <tr><td>Instructor</td><td><input name="instructor" value={lesson.instructor} onChange={handleChange} /></td></tr>
          <tr><td>Date</td><td><input type="date" name="date" value={lesson.date} onChange={handleChange} /></td></tr>
          <tr><td>Time</td><td><input type="time" name="time" value={lesson.time} onChange={handleChange} /></td></tr>
          <tr>
            <td>Vehicle Type</td>
            <td>
              <select name="vehicleType" value={lesson.vehicleType} onChange={handleChange}>
                <option>Manual</option>
                <option>Automatic</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="save-btn" onClick={handleSubmit}><FaSave /> Confirm Booking</button>
    </div>
  );
}
