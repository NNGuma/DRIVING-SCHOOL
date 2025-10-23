import React from "react";
import { FaChartLine } from "react-icons/fa";
import "../TableStyles.css";

export default function ProgressTracker() {
  const progress = [
    { id: 1, module: "Starting & Stopping", status: "Completed" },
    { id: 2, module: "Parking", status: "In Progress" },
    { id: 3, module: "Hill Start", status: "Pending" },
  ];

  return (
    <div className="crud-container">
      <h2><FaChartLine className="feature-icon" /> My Progress</h2>
      <table>
        <thead><tr><th>Lesson Module</th><th>Status</th></tr></thead>
        <tbody>
          {progress.map((p) => (
            <tr key={p.id}>
              <td>{p.module}</td>
              <td style={{ color: p.status === "Completed" ? "#32f0d0" : "#ff8c00" }}>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
