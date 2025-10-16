import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import "../TableStyles.css";

export default function InstructorTable() {
  const [instructors, setInstructors] = useState([
    { 
      id: 1, 
      UserID: "1", 
      IDNumber: "8001011234567",
      AppUser: "John Doe", 
      LicenceNumber: "ABC123", 
      email: "john@example.com", 
      IsActive: true 
    },
  ]);

  const [newInstructor, setNewInstructor] = useState({
    UserID: "",
    IDNumber: "",
    AppUser: "",
    LicenceNumber: "",
    email: "",
    IsActive: false,
  });

  const [editingId, setEditingId] = useState(null);
  const [editedInstructor, setEditedInstructor] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewInstructor({
      ...newInstructor,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addInstructor = () => {
    if (!newInstructor.AppUser.trim()) return alert("App User required");
    setInstructors([...instructors, { id: Date.now(), ...newInstructor }]);
    setNewInstructor({ UserID: "", IDNumber: "", AppUser: "", LicenceNumber: "", email: "", IsActive: false });
  };

  const deleteInstructor = (id) => setInstructors(instructors.filter((inst) => inst.id !== id));

  const startEdit = (instructor) => {
    setEditingId(instructor.id);
    setEditedInstructor(instructor);
  };

  const saveEdit = () => {
    setInstructors(instructors.map((inst) => (inst.id === editingId ? editedInstructor : inst)));
    setEditingId(null);
  };

  const cancelEdit = () => setEditingId(null);

  return (
    <div className="crud-container">
      <h2>Instructors</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID Number</th>
            <th>App User</th>
            <th>Licence Number</th>
            <th>Email</th>
            <th>Is Active</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td><input name="UserID" value={newInstructor.UserID} onChange={handleChange} /></td>
            <td><input name="IDNumber" value={newInstructor.IDNumber} onChange={handleChange} /></td>
            <td><input name="AppUser" value={newInstructor.AppUser} onChange={handleChange} /></td>
            <td><input name="LicenceNumber" value={newInstructor.LicenceNumber} onChange={handleChange} /></td>
            <td><input name="email" value={newInstructor.email} onChange={handleChange} /></td>
            <td>
              <input
                type="checkbox"
                name="IsActive"
                checked={newInstructor.IsActive}
                onChange={handleChange}
              />
            </td>
            <td><button className="add-btn" onClick={addInstructor}>Add</button></td>
          </tr>
        </thead>
        <tbody>
          {instructors.map((inst) => (
            <tr key={inst.id}>
              {editingId === inst.id ? (
                <>
                  <td><input value={editedInstructor.UserID} onChange={(e) => setEditedInstructor({ ...editedInstructor, UserID: e.target.value })} /></td>
                  <td><input value={editedInstructor.IDNumber} onChange={(e) => setEditedInstructor({ ...editedInstructor, IDNumber: e.target.value })} /></td>
                  <td><input value={editedInstructor.AppUser} onChange={(e) => setEditedInstructor({ ...editedInstructor, AppUser: e.target.value })} /></td>
                  <td><input value={editedInstructor.LicenceNumber} onChange={(e) => setEditedInstructor({ ...editedInstructor, LicenceNumber: e.target.value })} /></td>
                  <td><input value={editedInstructor.email} onChange={(e) => setEditedInstructor({ ...editedInstructor, email: e.target.value })} /></td>
                  <td>
                    <input
                      type="checkbox"
                      checked={editedInstructor.IsActive}
                      onChange={(e) => setEditedInstructor({ ...editedInstructor, IsActive: e.target.checked })}
                    />
                  </td>
                  <td>
                    <button className="save-btn" onClick={saveEdit}><FaSave /></button>
                    <button className="cancel-btn" onClick={cancelEdit}><FaTimes /></button>
                  </td>
                </>
              ) : (
                <>
                  <td>{inst.UserID}</td>
                  <td>{inst.IDNumber}</td>
                  <td>{inst.AppUser}</td>
                  <td>{inst.LicenceNumber}</td>
                  <td>{inst.email}</td>
                  <td>{inst.IsActive ? "Yes" : "No"}</td>
                  <td>
                    <button className="edit-btn" onClick={() => startEdit(inst)}><FaEdit /></button>
                    <button className="delete-btn" onClick={() => deleteInstructor(inst.id)}><FaTrash /></button>
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
