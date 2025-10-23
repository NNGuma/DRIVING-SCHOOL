import React, { useState } from "react";
import { FaCalendarCheck, FaRegClock } from "react-icons/fa";
import "../TableStyles.css";

export default function MyLessons() {
  const [lessons] = useState([
    { id: 1, date: "2025-10-25", time: "09:00", learner: "Nomsa Khumalo", status: "Scheduled" },
    { id: 2, date: "2025-10-27", time: "11:30", learner: "Thabo Nkosi", status: "Completed" },
  ]);

  return (
    <div className="crud-container">
      <h2><FaCalendarCheck className="feature-icon" /> My Lessons</h2>
      <table>
        <thead>
          <tr><th>Date</th><th>Time</th><th>Learner</th><th>Status</th></tr>
        </thead>
        <tbody>
          {lessons.map((l) => (
            <tr key={l.id}>
              <td>{l.date}</td>
              <td>{l.time}</td>
              <td>{l.learner}</td>
              <td>{l.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
