import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import "../TableStyles.css";

export default function DrivingSchoolTable() {
  const [schools, setSchools] = useState([
    { id: 1, name: "Road Master", regNumber: "RS-2024-01", address: "123 Main Rd", phone: "012-345-6789", email: "info@roadmaster.com" },
  ]);

  const [newSchool, setNewSchool] = useState({
    name: "",
    regNumber: "",
    address: "",
    phone: "",
    email: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [editedSchool, setEditedSchool] = useState({});

  const handleChange = (e) => {
    setNewSchool({ ...newSchool, [e.target.name]: e.target.value });
  };

  const addSchool = () => {
    if (!newSchool.name.trim()) return alert("School name required");
    setSchools([
      ...schools,
      { id: Date.now(), ...newSchool },
    ]);
    setNewSchool({ name: "", regNumber: "", address: "", phone: "", email: "" });
  };

  const deleteSchool = (id) => {
    setSchools(schools.filter((s) => s.id !== id));
  };

  const startEdit = (school) => {
    setEditingId(school.id);
    setEditedSchool(school);
  };

  const saveEdit = () => {
    setSchools(schools.map((s) => (s.id === editingId ? editedSchool : s)));
    setEditingId(null);
  };

  const cancelEdit = () => setEditingId(null);

  return (
    <div className="crud-container">
      <h2>Driving Schools</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reg Number</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td><input name="name" value={newSchool.name} onChange={handleChange} /></td>
            <td><input name="regNumber" value={newSchool.regNumber} onChange={handleChange} /></td>
            <td><input name="address" value={newSchool.address} onChange={handleChange} /></td>
            <td><input name="phone" value={newSchool.phone} onChange={handleChange} /></td>
            <td><input name="email" value={newSchool.email} onChange={handleChange} /></td>
            <td><button className="add-btn" onClick={addSchool}>Add</button></td>
          </tr>
        </thead>
        <tbody>
          {schools.map((school) => (
            <tr key={school.id}>
              {editingId === school.id ? (
                <>
                  <td><input value={editedSchool.name} onChange={(e) => setEditedSchool({ ...editedSchool, name: e.target.value })} /></td>
                  <td><input value={editedSchool.regNumber} onChange={(e) => setEditedSchool({ ...editedSchool, regNumber: e.target.value })} /></td>
                  <td><input value={editedSchool.address} onChange={(e) => setEditedSchool({ ...editedSchool, address: e.target.value })} /></td>
                  <td><input value={editedSchool.phone} onChange={(e) => setEditedSchool({ ...editedSchool, phone: e.target.value })} /></td>
                  <td><input value={editedSchool.email} onChange={(e) => setEditedSchool({ ...editedSchool, email: e.target.value })} /></td>
                  <td>
                    <button className="save-btn" onClick={saveEdit}><FaSave /></button>
                    <button className="cancel-btn" onClick={cancelEdit}><FaTimes /></button>
                  </td>
                </>
              ) : (
                <>
                  <td>{school.name}</td>
                  <td>{school.regNumber}</td>
                  <td>{school.address}</td>
                  <td>{school.phone}</td>
                  <td>{school.email}</td>
                  <td>
                    <button className="edit-btn" onClick={() => startEdit(school)}><FaEdit /></button>
                    <button className="delete-btn" onClick={() => deleteSchool(school.id)}><FaTrash /></button>
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
