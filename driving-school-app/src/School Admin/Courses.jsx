import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import "../TableStyles.css";

export default function CourseTable() {
  const [courses, setCourses] = useState([
    { id: 1, ID: "1", Title: "React Basics", Description: "Intro to React", DurationHours: "10", Price: "$100" },
  ]);

  const [newCourse, setNewCourse] = useState({
    ID: "",
    Title: "",
    Description: "",
    DurationHours: "",
    Price: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [editedCourse, setEditedCourse] = useState({});

  const handleChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const addCourse = () => {
    if (!newCourse.Title.trim()) return alert("Title required");
    setCourses([...courses, { id: Date.now(), ...newCourse }]);
    setNewCourse({ ID: "", Title: "", Description: "", DurationHours: "", Price: "" });
  };

  const deleteCourse = (id) => setCourses(courses.filter((c) => c.id !== id));

  const startEdit = (course) => {
    setEditingId(course.id);
    setEditedCourse(course);
  };

  const saveEdit = () => {
    setCourses(courses.map((c) => (c.id === editingId ? editedCourse : c)));
    setEditingId(null);
  };

  const cancelEdit = () => setEditingId(null);

  return (
    <div className="crud-container">
      <h2>Courses</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Duration Hours</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td><input name="ID" value={newCourse.ID} onChange={handleChange} /></td>
            <td><input name="Title" value={newCourse.Title} onChange={handleChange} /></td>
            <td><input name="Description" value={newCourse.Description} onChange={handleChange} /></td>
            <td><input name="DurationHours" value={newCourse.DurationHours} onChange={handleChange} /></td>
            <td><input name="Price" value={newCourse.Price} onChange={handleChange} /></td>
            <td><button className="add-btn" onClick={addCourse}>Add</button></td>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              {editingId === c.id ? (
                <>
                  <td><input value={editedCourse.ID} onChange={(e) => setEditedCourse({ ...editedCourse, ID: e.target.value })} /></td>
                  <td><input value={editedCourse.Title} onChange={(e) => setEditedCourse({ ...editedCourse, Title: e.target.value })} /></td>
                  <td><input value={editedCourse.Description} onChange={(e) => setEditedCourse({ ...editedCourse, Description: e.target.value })} /></td>
                  <td><input value={editedCourse.DurationHours} onChange={(e) => setEditedCourse({ ...editedCourse, DurationHours: e.target.value })} /></td>
                  <td><input value={editedCourse.Price} onChange={(e) => setEditedCourse({ ...editedCourse, Price: e.target.value })} /></td>
                  <td>
                    <button className="save-btn" onClick={saveEdit}><FaSave /></button>
                    <button className="cancel-btn" onClick={cancelEdit}><FaTimes /></button>
                  </td>
                </>
              ) : (
                <>
                  <td>{c.ID}</td>
                  <td>{c.Title}</td>
                  <td>{c.Description}</td>
                  <td>{c.DurationHours}</td>
                  <td>{c.Price}</td>
                  <td>
                    <button className="edit-btn" onClick={() => startEdit(c)}><FaEdit /></button>
                    <button className="delete-btn" onClick={() => deleteCourse(c.id)}><FaTrash /></button>
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
