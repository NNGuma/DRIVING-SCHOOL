import React, { useState, useEffect } from "react";
import "../TableStyles.css";

export default function PaymentsTable() {
  // Example payments for display — later connect to API
  const [payments, setPayments] = useState([
    {
      id: 1,
      learner: "John Doe",
      course: "Code 8 Driving Lessons",
      amount: 1200,
      date: "2025-01-15",
      status: "Paid",
      method: "Card",
    },
    {
      id: 2,
      learner: "Sarah Mkhize",
      course: "Code 10 Driving Lessons",
      amount: 1500,
      date: "2025-02-01",
      status: "Paid",
      method: "EFT",
    },
    {
      id: 3,
      learner: "Thabo Ndlovu",
      course: "Advanced Driving Course",
      amount: 2200,
      date: "2025-02-12",
      status: "Pending",
      method: "Card",
    },
  ]);

  // Calculate total paid
  const totalPaid = payments
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + Number(p.amount), 0);

  return (
    <div className="crud-container">
      <h2>Payments Overview</h2>
      <p style={{ color: "#32f0d0", marginBottom: "20px" }}>
        Viewing all payments made by learners
      </p>

      <table>
        <thead>
          <tr>
            <th>Learner</th>
            <th>Course</th>
            <th>Amount (R)</th>
            <th>Date</th>
            <th>Status</th>
            <th>Method</th>
          </tr>
        </thead>

        <tbody>
          {payments.length > 0 ? (
            payments.map((p) => (
              <tr key={p.id}>
                <td>{p.learner}</td>
                <td>{p.course}</td>
                <td>{p.amount}</td>
                <td>{p.date}</td>
                <td
                  style={{
                    color:
                      p.status === "Paid"
                        ? "#32f0d0"
                        : p.status === "Pending"
                        ? "#ff8c00"
                        : "#dc3545",
                    fontWeight: "600",
                  }}
                >
                  {p.status}
                </td>
                <td>{p.method}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ color: "#aaa" }}>
                No payments found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div
        style={{
          textAlign: "right",
          marginTop: "20px",
          fontWeight: "600",
          fontSize: "18px",
        }}
      >
        Total Paid:{" "}
        <span style={{ color: "#32f0d0" }}>R{totalPaid.toFixed(2)}</span>
      </div>
    </div>
  );
}
