import React, { useState } from "react";
import "../TableStyles.css";

export default function BookingTableAdmin() {
  const [bookings] = useState([
    { id: 1, student: "John Doe", course: "Beginner Driving", instructor: "Jane Smith", start: "2025-10-15 09:00", end: "2025-10-15 10:00", status: "Confirmed" },
    { id: 2, student: "Alice Brown", course: "Intermediate Driving", instructor: "Tom Lee", start: "2025-10-16 11:00", end: "2025-10-16 12:00", status: "Pending" },
    { id: 3, student: "Mark Wilson", course: "Advanced Driving", instructor: "Sara Khan", start: "2025-10-17 14:00", end: "2025-10-17 15:00", status: "Cancelled" }
  ]);

  const getStatusClass = (status) => {
    switch(status) {
      case "Confirmed": return "status-confirmed";
      case "Pending": return "status-pending";
      case "Cancelled": return "status-cancelled";
      case "Completed": return "status-completed";
      default: return "";
    }
  };

  return (
    <div className="crud-container">
      <h2>Bookings </h2>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Instructor</th>
              <th>Start</th>
              <th>End</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="table-row">
                <td data-label="Student">{b.student}</td>
                <td data-label="Course">{b.course}</td>
                <td data-label="Instructor">{b.instructor}</td>
                <td data-label="Start">{b.start}</td>
                <td data-label="End">{b.end}</td>
                <td data-label="Status">
                  <span className={`status-badge ${getStatusClass(b.status)}`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
