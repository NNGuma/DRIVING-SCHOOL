import React, { useState } from "react";
import { FaTasks, FaSave } from "react-icons/fa";
import "../TableStyles.css";

export default function ManageProgress() {
  const [progress, setProgress] = useState([
    { id: 1, learner: "Nomsa Khumalo", lesson: "Parking Practice", result: "Passed" },
    { id: 2, learner: "Thabo Nkosi", lesson: "Hill Start", result: "Pending" },
  ]);

  const handleChange = (id, value) => {
    setProgress(progress.map((p) => (p.id === id ? { ...p, result: value } : p)));
  };

  const handleSave = () => alert("Progress saved successfully!");

  return (
    <div className="crud-container">
      <h2><FaTasks className="feature-icon" /> Manage Learner Progress</h2>
      <table>
        <thead>
          <tr><th>Learner</th><th>Lesson</th><th>Result</th></tr>
        </thead>
        <tbody>
          {progress.map((p) => (
            <tr key={p.id}>
              <td>{p.learner}</td>
              <td>{p.lesson}</td>
              <td>
                <select
                  value={p.result}
                  onChange={(e) => handleChange(p.id, e.target.value)}
                >
                  <option>Passed</option>
                  <option>Failed</option>
                  <option>Pending</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="save-btn" onClick={handleSave}>
        <FaSave /> Save Progress
      </button>
    </div>
  );
}
