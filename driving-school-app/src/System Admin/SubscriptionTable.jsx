import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import "../TableStyles.css";


export default function SubscriptionTable() {
  const [subscriptions, setSubscriptions] = useState([
    { 
      id: 1,
      school: "Redefined-IT Driving School",
      plan: "Premium",
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      status: "Active"
    },
  ]);

  const [newSub, setNewSub] = useState({
    school: "",
    plan: "Free",
    startDate: "",
    endDate: "",
    status: "Active",
  });

  const [editingId, setEditingId] = useState(null);
  const [editedSub, setEditedSub] = useState({});

  const handleChange = (e) => {
    setNewSub({ ...newSub, [e.target.name]: e.target.value });
  };

  const addSub = () => {
    if (!newSub.school.trim()) return alert("School name is required");
    setSubscriptions([...subscriptions, { id: Date.now(), ...newSub }]);
    setNewSub({
      school: "",
      plan: "Free",
      startDate: "",
      endDate: "",
      status: "Active",
    });
  };

  const deleteSub = (id) => setSubscriptions(subscriptions.filter((s) => s.id !== id));
  const startEdit = (s) => { setEditingId(s.id); setEditedSub(s); };
  const saveEdit = () => { setSubscriptions(subscriptions.map((s) => (s.id === editingId ? editedSub : s))); setEditingId(null); };
  const cancelEdit = () => setEditingId(null);

  return (
    <div className="crud-container">
      <h2>Subscriptions</h2>
      <table>
        <thead>
          <tr>
            <th>Driving School</th>
            <th>Plan</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td><input name="school" value={newSub.school} onChange={handleChange} /></td>
            <td>
              <select name="plan" value={newSub.plan} onChange={handleChange}>
                <option>Free</option>
                <option>Standard</option>
                <option>Premium</option>
              </select>
            </td>
            <td><input type="date" name="startDate" value={newSub.startDate} onChange={handleChange} /></td>
            <td><input type="date" name="endDate" value={newSub.endDate} onChange={handleChange} /></td>
            <td>
              <select name="status" value={newSub.status} onChange={handleChange}>
                <option>Active</option>
                <option>Expired</option>
                <option>Cancelled</option>
              </select>
            </td>
            <td><button className="add-btn" onClick={addSub}>Add</button></td>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((s) => (
            <tr key={s.id}>
              {editingId === s.id ? (
                <>
                  <td><input value={editedSub.school} onChange={(e) => setEditedSub({ ...editedSub, school: e.target.value })} /></td>
                  <td>
                    <select value={editedSub.plan} onChange={(e) => setEditedSub({ ...editedSub, plan: e.target.value })}>
                      <option>Free</option>
                      <option>Standard</option>
                      <option>Premium</option>
                    </select>
                  </td>
                  <td><input type="date" value={editedSub.startDate} onChange={(e) => setEditedSub({ ...editedSub, startDate: e.target.value })} /></td>
                  <td><input type="date" value={editedSub.endDate} onChange={(e) => setEditedSub({ ...editedSub, endDate: e.target.value })} /></td>
                  <td>
                    <select value={editedSub.status} onChange={(e) => setEditedSub({ ...editedSub, status: e.target.value })}>
                      <option>Active</option>
                      <option>Expired</option>
                      <option>Cancelled</option>
                    </select>
                  </td>
                  <td>
                    <button className="save-btn" onClick={saveEdit}><FaSave /></button>
                    <button className="cancel-btn" onClick={cancelEdit}><FaTimes /></button>
                  </td>
                </>
              ) : (
                <>
                  <td>{s.school}</td>
                  <td>{s.plan}</td>
                  <td>{s.startDate}</td>
                  <td>{s.endDate}</td>
                  <td>{s.status}</td>
                  <td>
                    <button className="edit-btn" onClick={() => startEdit(s)}><FaEdit /></button>
                    <button className="delete-btn" onClick={() => deleteSub(s.id)}><FaTrash /></button>
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
