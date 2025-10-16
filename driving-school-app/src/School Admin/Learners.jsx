import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import "../TableStyles.css";

export default function StudentTable() {
  const [students, setStudents] = useState([
    { 
      id: 1, 
      StudentID: "1", 
      IDNumber: "9001011234567", 
      fullName: "John Doe", 
      licenseType: "Code 8", 
      address: "123 Street", 
      phone: "0721234567", 
      email: "john@example.com",
      IsActive: true
    },
  ]);

  const [newStudent, setNewStudent] = useState({
    StudentID: "",
    IDNumber: "",
    fullName: "",
    licenseType: "",
    address: "",
    phone: "",
    email: "",
    IsActive: false,
  });

  const [editingId, setEditingId] = useState(null);
  const [editedStudent, setEditedStudent] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addStudent = () => {
    if (!newStudent.fullName.trim()) return alert("Full name required");
    setStudents([...students, { id: Date.now(), ...newStudent }]);
    setNewStudent({ StudentID: "", IDNumber: "", fullName: "", licenseType: "", address: "", phone: "", email: "", IsActive: false });
  };

  const deleteStudent = (id) => setStudents(students.filter((s) => s.id !== id));

  const startEdit = (student) => {
    setEditingId(student.id);
    setEditedStudent(student);
  };

  const saveEdit = () => {
    setStudents(students.map((s) => (s.id === editingId ? editedStudent : s)));
    setEditingId(null);
  };

  const cancelEdit = () => setEditingId(null);

  return (
    <div className="crud-container">
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Number</th>
            <th>Full Name</th>
            <th>License Type</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Is Active</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td><input name="StudentID" value={newStudent.StudentID} onChange={handleChange} /></td>
            <td><input name="IDNumber" value={newStudent.IDNumber} onChange={handleChange} /></td>
            <td><input name="fullName" value={newStudent.fullName} onChange={handleChange} /></td>
            <td><input name="licenseType" value={newStudent.licenseType} onChange={handleChange} /></td>
            <td><input name="address" value={newStudent.address} onChange={handleChange} /></td>
            <td><input name="phone" value={newStudent.phone} onChange={handleChange} /></td>
            <td><input name="email" value={newStudent.email} onChange={handleChange} /></td>
            <td>
              <input 
                type="checkbox" 
                name="IsActive" 
                checked={newStudent.IsActive} 
                onChange={handleChange} 
              />
            </td>
            <td><button className="add-btn" onClick={addStudent}>Add</button></td>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              {editingId === student.id ? (
                <>
                  <td><input value={editedStudent.StudentID} onChange={(e) => setEditedStudent({ ...editedStudent, StudentID: e.target.value })} /></td>
                  <td><input value={editedStudent.IDNumber} onChange={(e) => setEditedStudent({ ...editedStudent, IDNumber: e.target.value })} /></td>
                  <td><input value={editedStudent.fullName} onChange={(e) => setEditedStudent({ ...editedStudent, fullName: e.target.value })} /></td>
                  <td><input value={editedStudent.licenseType} onChange={(e) => setEditedStudent({ ...editedStudent, licenseType: e.target.value })} /></td>
                  <td><input value={editedStudent.address} onChange={(e) => setEditedStudent({ ...editedStudent, address: e.target.value })} /></td>
                  <td><input value={editedStudent.phone} onChange={(e) => setEditedStudent({ ...editedStudent, phone: e.target.value })} /></td>
                  <td><input value={editedStudent.email} onChange={(e) => setEditedStudent({ ...editedStudent, email: e.target.value })} /></td>
                  <td>
                    <input 
                      type="checkbox" 
                      checked={editedStudent.IsActive} 
                      onChange={(e) => setEditedStudent({ ...editedStudent, IsActive: e.target.checked })} 
                    />
                  </td>
                  <td>
                    <button className="save-btn" onClick={saveEdit}><FaSave /></button>
                    <button className="cancel-btn" onClick={cancelEdit}><FaTimes /></button>
                  </td>
                </>
              ) : (
                <>
                  <td>{student.StudentID}</td>
                  <td>{student.IDNumber}</td>
                  <td>{student.fullName}</td>
                  <td>{student.licenseType}</td>
                  <td>{student.address}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td>{student.IsActive ? "Yes" : "No"}</td>
                  <td>
                    <button className="edit-btn" onClick={() => startEdit(student)}><FaEdit /></button>
                    <button className="delete-btn" onClick={() => deleteStudent(student.id)}><FaTrash /></button>
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
