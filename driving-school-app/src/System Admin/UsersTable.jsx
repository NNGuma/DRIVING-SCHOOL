import React, { useState } from "react";
import "../TableStyles.css";

export default function UsersTable() {
  const [users] = useState([
    { id: 1, name: "Thabo Ndlovu", email: "thabo@gmail.com", role: "Learner", status: "Active" },
    { id: 2, name: "Nomsa Dlamini", email: "nomsa@school.com", role: "Instructor", status: "Active" },
    { id: 3, name: "Admin Joe", email: "joe@admin.com", role: "SystemAdmin", status: "Active" },
  ]);

  return (
    <div className="crud-container">
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td style={{ color: u.status === "Active" ? "#32f0d0" : "#dc3545" }}>{u.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
