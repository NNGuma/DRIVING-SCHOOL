import React from "react";
import { FaCreditCard } from "react-icons/fa";
import "../TableStyles.css";

export default function PaymentHistory() {
  const payments = [
    { id: 1, date: "2025-09-25", amount: "R450", method: "Card", reference: "TXN-1056" },
  ];

  return (
    <div className="crud-container">
      <h2><FaCreditCard className="feature-icon" /> Payment History</h2>
      <table>
        <thead><tr><th>Date</th><th>Amount</th><th>Method</th><th>Reference</th></tr></thead>
        <tbody>
          {payments.length === 0 ? (
            <tr><td colSpan="4" style={{ color: "#999" }}>No payments found</td></tr>
          ) : (
            payments.map((p) => (
              <tr key={p.id}>
                <td>{p.date}</td>
                <td>{p.amount}</td>
                <td>{p.method}</td>
                <td>{p.reference}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
