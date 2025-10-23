import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import "../TableStyles.css";

export default function LearnerList() {
  const learners = [
    { id: 1, name: "Nomsa Khumalo", contact: "0821234567", lessons: 10 },
    { id: 2, name: "Thabo Nkosi", contact: "0729876543", lessons: 6 },
  ];

  return (
    <div className="crud-container">
      <h2><FaUserGraduate className="feature-icon" /> My Learners</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Contact</th><th>Lessons Completed</th></tr>
        </thead>
        <tbody>
          {learners.map((l) => (
            <tr key={l.id}>
              <td>{l.name}</td>
              <td>{l.contact}</td>
              <td>{l.lessons}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
