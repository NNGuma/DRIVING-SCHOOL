import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./payments.css";

export default function SubscriptionBilling() {
  const navigate = useNavigate();

  const [plans] = useState([
    { id: "PL-001", name: "Monthly - Basic", price: 199, interval: "Monthly" },
    { id: "PL-002", name: "Monthly - Pro", price: 399, interval: "Monthly" },
    { id: "PL-003", name: "Annual - Pro", price: 3999, interval: "Yearly" },
  ]);

  const handleSubscribe = (planId) => {
    navigate(`/payments/gateway?plan=${planId}`);
  };

  return (
    <div className="crud-container">
      <h2>Subscription Billing</h2>
      <p>Manage subscription plans and billing history.</p>

      <div className="pay-controls">
        <div className="filter-row">
          <select defaultValue="">
            <option value="">All Plans</option>
            {plans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button className="btn btn-refresh">
            <FaSyncAlt /> Refresh
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="table-payments">
          <thead>
            <tr>
              <th>Plan ID</th>
              <th>Plan Name</th>
              <th>Interval</th>
              <th>Price (ZAR)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((p) => (
              <tr key={p.id}>
                <td className="tx-id">{p.id}</td>
                <td>{p.name}</td>
                <td>{p.interval}</td>
                <td>R{p.price.toFixed(2)}</td>
                <td>
                  <button
                    className="invoice-link"
                    onClick={() => handleSubscribe(p.id)}
                  >
                    Subscribe
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
