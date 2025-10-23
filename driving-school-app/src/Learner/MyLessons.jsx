import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaCalendarCheck } from "react-icons/fa";
import "../TableStyles.css";

export default function MyLessons() {
  const [lessons, setLessons] = useState([
    { id: 1, date: "2025-10-26", time: "09:00", instructor: "Mr. Dlamini", status: "Scheduled" },
  ]);

  const cancelLesson = (id) => {
    if (window.confirm("Cancel this lesson?")) {
      setLessons(lessons.map(l => l.id === id ? { ...l, status: "Cancelled" } : l));
    }
  };

  return (
    <div className="crud-container">
      <h2><FaCalendarCheck className="feature-icon" /> My Lessons</h2>
      <table>
        <thead><tr><th>Date</th><th>Time</th><th>Instructor</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          {lessons.map((l) => (
            <tr key={l.id}>
              <td>{l.date}</td>
              <td>{l.time}</td>
              <td>{l.instructor}</td>
              <td>{l.status}</td>
              <td className="action-col">
                <button className="edit-btn" title="Reschedule"><FaEdit /></button>
                <button className="delete-btn" title="Cancel" onClick={() => cancelLesson(l.id)}><FaTrashAlt /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
