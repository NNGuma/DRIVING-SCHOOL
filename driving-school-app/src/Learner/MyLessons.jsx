import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaCalendarCheck, FaSave } from "react-icons/fa";
import "../TableStyles.css";

export default function MyLessons() {
  const [lessons, setLessons] = useState([
    { id: 1, date: "2025-10-26", time: "09:00", instructor: "Mr. Dlamini", status: "Scheduled" },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ date: "", time: "" });

  const cancelLesson = (id) => {
    if (window.confirm("Cancel this lesson?")) {
      setLessons(
        lessons.map((l) =>
          l.id === id ? { ...l, status: "Cancelled" } : l
        )
      );
    }
  };

  const startEdit = (lesson) => {
    setEditingId(lesson.id);
    setEditData({ date: lesson.date, time: lesson.time });
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = (id) => {
    setLessons(
      lessons.map((l) =>
        l.id === id ? { ...l, date: editData.date, time: editData.time } : l
      )
    );
    setEditingId(null);
  };

  return (
    <div className="crud-container">
      <h2>
        <FaCalendarCheck className="feature-icon" /> My Lessons
      </h2>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Instructor</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {lessons.map((l) => (
            <tr key={l.id}>
              <td>
                {editingId === l.id ? (
                  <input
                    type="date"
                    name="date"
                    value={editData.date}
                    onChange={handleChange}
                  />
                ) : (
                  l.date
                )}
              </td>

              <td>
                {editingId === l.id ? (
                  <input
                    type="time"
                    name="time"
                    value={editData.time}
                    onChange={handleChange}
                  />
                ) : (
                  l.time
                )}
              </td>

              <td>{l.instructor}</td>
              <td>{l.status}</td>

              <td className="action-col">
                {editingId === l.id ? (
                  <button
                    className="save-btn"
                    onClick={() => saveEdit(l.id)}
                    title="Save"
                  >
                    <FaSave />
                  </button>
                ) : (
                  <button
                    className="edit-btn"
                    title="Reschedule"
                    onClick={() => startEdit(l)}
                  >
                    <FaEdit />
                  </button>
                )}

                <button
                  className="delete-btn"
                  title="Cancel"
                  onClick={() => cancelLesson(l.id)}
                >
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