import React, { useState } from "react";
import "../TableStyles.css";

export default function PaymentsTable() {
  const [payments] = useState([
    { id: 1, school: "Redefined-IT Driving", amount: 1200, date: "2025-01-15", method: "EFT", status: "Paid" },
    { id: 2, school: "DriveSafe Academy", amount: 800, date: "2025-02-02", method: "Card", status: "Pending" },
  ]);

  const total = payments.reduce((sum, p) => sum + Number(p.amount), 0);

  return (
    <div className="crud-container">
      <h2>Payments Overview</h2>
      <table>
        <thead>
          <tr>
            <th>School</th>
            <th>Amount (R)</th>
            <th>Date</th>
            <th>Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.id}>
              <td>{p.school}</td>
              <td>{p.amount}</td>
              <td>{p.date}</td>
              <td>{p.method}</td>
              <td style={{ color: p.status === "Paid" ? "#32f0d0" : "#ff8c00" }}>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{ textAlign: "right", marginTop: "20px" }}>
        Total: <span style={{ color: "#32f0d0" }}>R{total}</span>
      </h3>
    </div>
  );
}
