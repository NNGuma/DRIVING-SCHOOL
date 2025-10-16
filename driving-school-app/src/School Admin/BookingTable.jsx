import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import "../TableStyles.css";

export default function BookingTable() {
  const [bookings, setBookings] = useState([
    { id: 1, student: "John Doe", course: "Beginner Driving", instructor: "Jane Smith", start: "2025-10-15 09:00", end: "2025-10-15 10:00", status: "Confirmed" },
  ]);

  const [newBooking, setNewBooking] = useState({
    student: "",
    course: "",
    instructor: "",
    start: "",
    end: "",
    status: "Pending",
  });

  const [editingId, setEditingId] = useState(null);
  const [editedBooking, setEditedBooking] = useState({});

  const handleChange = (e) => setNewBooking({ ...newBooking, [e.target.name]: e.target.value });

  const addBooking = () => {
    if (!newBooking.student.trim()) return alert("Student name required");
    setBookings([...bookings, { id: Date.now(), ...newBooking }]);
    setNewBooking({ student: "", course: "", instructor: "", start: "", end: "", status: "Pending" });
  };

  const deleteBooking = (id) => setBookings(bookings.filter((b) => b.id !== id));
  const startEdit = (b) => { setEditingId(b.id); setEditedBooking(b); };
  const saveEdit = () => { setBookings(bookings.map((b) => (b.id === editingId ? editedBooking : b))); setEditingId(null); };
  const cancelEdit = () => setEditingId(null);

  return (
    <div className="crud-container">
      <h2>Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Course</th>
            <th>Instructor</th>
            <th>Start</th>
            <th>End</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td><input name="student" value={newBooking.student} onChange={handleChange} /></td>
            <td><input name="course" value={newBooking.course} onChange={handleChange} /></td>
            <td><input name="instructor" value={newBooking.instructor} onChange={handleChange} /></td>
            <td><input type="datetime-local" name="start" value={newBooking.start} onChange={handleChange} /></td>
            <td><input type="datetime-local" name="end" value={newBooking.end} onChange={handleChange} /></td>
            <td>
              <select name="status" value={newBooking.status} onChange={handleChange}>
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Cancelled</option>
                <option>Completed</option>
              </select>
            </td>
            <td><button className="add-btn" onClick={addBooking}>Add</button></td>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              {editingId === b.id ? (
                <>
                  <td><input value={editedBooking.student} onChange={(e) => setEditedBooking({ ...editedBooking, student: e.target.value })} /></td>
                  <td><input value={editedBooking.course} onChange={(e) => setEditedBooking({ ...editedBooking, course: e.target.value })} /></td>
                  <td><input value={editedBooking.instructor} onChange={(e) => setEditedBooking({ ...editedBooking, instructor: e.target.value })} /></td>
                  <td><input type="datetime-local" value={editedBooking.start} onChange={(e) => setEditedBooking({ ...editedBooking, start: e.target.value })} /></td>
                  <td><input type="datetime-local" value={editedBooking.end} onChange={(e) => setEditedBooking({ ...editedBooking, end: e.target.value })} /></td>
                  <td>
                    <select value={editedBooking.status} onChange={(e) => setEditedBooking({ ...editedBooking, status: e.target.value })}>
                      <option>Pending</option>
                      <option>Confirmed</option>
                      <option>Cancelled</option>
                      <option>Completed</option>
                    </select>
                  </td>
                  <td>
                    <button className="save-btn" onClick={saveEdit}><FaSave /></button>
                    <button className="cancel-btn" onClick={cancelEdit}><FaTimes /></button>
                  </td>
                </>
              ) : (
                <>
                  <td>{b.student}</td>
                  <td>{b.course}</td>
                  <td>{b.instructor}</td>
                  <td>{b.start}</td>
                  <td>{b.end}</td>
                  <td>{b.status}</td>
                  <td>
                    <button className="edit-btn" onClick={() => startEdit(b)}><FaEdit /></button>
                    <button className="delete-btn" onClick={() => deleteBooking(b.id)}><FaTrash /></button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
