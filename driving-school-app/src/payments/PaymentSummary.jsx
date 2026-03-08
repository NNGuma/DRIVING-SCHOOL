import React, { useState } from "react";
import { FaFileInvoice, FaDownload, FaSyncAlt } from "react-icons/fa";
import "./payments.css";

export default function PaymentHistory() {

  const [transactions] = useState([
    { id: "TXN-10001", date: "2025-11-01", desc: "Lesson booking - Session 12", method: "Card", amount: 250, status: "Successful", invoice: "/invoice/10001" },
    { id: "TXN-10002", date: "2025-10-21", desc: "Subscription monthly", method: "EFT", amount: 499, status: "Successful", invoice: "/invoice/10002" },
    { id: "TXN-10003", date: "2025-10-15", desc: "Lesson booking - Session 11", method: "Card", amount: 250, status: "Declined", invoice: "" },
    { id: "TXN-10004", date: "2025-10-10", desc: "Wallet top-up", method: "Card", amount: 500, status: "Pending", invoice: "/invoice/10004" },
  ]);

  return (
    <div className="crud-container">

      <h2>TRANSACTION HISTORY</h2>
      <p>All transactions (extended view). Use filters to narrow results.</p>

      <div className="pay-controls">

        <div className="filter-row">
          <label style={{marginRight:8}}>From</label>
          <input type="date" />

          <label style={{marginLeft:12, marginRight:8}}>To</label>
          <input type="date" />

          <select defaultValue="">
            <option value="">All Methods</option>
            <option>Card</option>
            <option>EFT</option>
            <option>Wallet</option>
          </select>
        </div>

        <div style={{display:"flex", gap:8}}>
          <button className="btn btn-export">
            <FaDownload /> Export CSV
          </button>

          <button className="btn btn-refresh">
            <FaSyncAlt /> Refresh
          </button>
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
              <th>Amount (ZAR)</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(tx => (
              <tr key={tx.id}>
                <td className="tx-id">{tx.id}</td>
                <td>{tx.date}</td>
                <td>{tx.desc}</td>
                <td>{tx.method}</td>
                <td>R{tx.amount.toFixed(2)}</td>

                <td>
                  <span className={`status-badge ${
                    tx.status === "Successful"
                      ? "status-success"
                      : tx.status === "Pending"
                      ? "status-pending"
                      : "status-declined"
                  }`}>
                    {tx.status}
                  </span>
                </td>

                <td>
                  {tx.invoice ? (
                    <a className="invoice-link" href={tx.invoice}>
                      <FaFileInvoice /> View
                    </a>
                  ) : "-"}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}