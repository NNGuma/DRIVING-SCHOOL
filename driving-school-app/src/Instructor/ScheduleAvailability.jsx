import React, { useState } from "react";
import { FaCalendarPlus, FaTrashAlt } from "react-icons/fa";
import "../TableStyles.css";

export default function ScheduleAvailability() {
  const [availability, setAvailability] = useState([
    { id: 1, date: "2025-10-26", time: "09:00" },
  ]);
  const [newSlot, setNewSlot] = useState({ date: "", time: "" });

  const handleAdd = () => {
    if (!newSlot.date || !newSlot.time) return alert("Date and time required");
    setAvailability([...availability, { id: Date.now(), ...newSlot }]);
    setNewSlot({ date: "", time: "" });
  };

  const handleDelete = (id) => {
    setAvailability(availability.filter((a) => a.id !== id));
  };

  return (
    <div className="crud-container">
      <h2><FaCalendarPlus className="feature-icon" /> My Availability</h2>
      <table>
        <thead>
          <tr><th>Date</th><th>Time</th><th>Action</th></tr>
          <tr>
            <td><input type="date" value={newSlot.date} onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })} /></td>
            <td><input type="time" value={newSlot.time} onChange={(e) => setNewSlot({ ...newSlot, time: e.target.value })} /></td>
            <td><button className="add-btn" onClick={handleAdd}>Add</button></td>
          </tr>
        </thead>
        <tbody>
          {availability.map((a) => (
            <tr key={a.id}>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(a.id)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
