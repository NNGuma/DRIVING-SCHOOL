import React, { useState } from "react";
import { FaTimesCircle, FaRedo } from "react-icons/fa";
import "./payments.css";

export default function DeclinedPayments(){
  const [declined] = useState([
    { id: "TXN-30001", date: "2025-10-15", desc: "Lesson Booking", method: "Card", amount: 250, status: "Declined", invoice: "" },
    { id: "TXN-30002", date: "2025-10-12", desc: "Progress Fee", method: "Card", amount: 150, status: "Declined", invoice: "" },
  ]);

  return (
    <div className="crud-container">
      <h2>Declined Payments</h2>
      <p>Payments that were declined — learners can retry payment from invoice.</p>

      <div className="pay-controls">
        <div className="filter-row">
          <select defaultValue="">
            <option value="">All Methods</option>
            <option>Card</option>
          </select>
        </div>
        <div>
          <button className="btn btn-refresh"><FaRedo /> Retry</button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="table-payments">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Method</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {declined.map(tx=>(
              <tr key={tx.id}>
                <td className="tx-id">{tx.id}</td>
                <td>{tx.date}</td>
                <td>{tx.desc}</td>
                <td>{tx.method}</td>
                <td>R{tx.amount.toFixed(2)}</td>
                <td><span className="status-badge status-declined">Declined</span></td>
                <td>{tx.invoice ? <a className="invoice-link" href={tx.invoice}>View</a> : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
