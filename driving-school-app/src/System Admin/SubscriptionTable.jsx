import React, { useState } from "react";
import "../TableStyles.css";

export default function SubscriptionTableAdmin() {
  const [subscriptions] = useState([
    { 
      id: 1,
      school: "Redefined-IT Driving School",
      plan: "Premium",
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      status: "Active"
    },
    { 
      id: 2,
      school: "Bright Future Driving School",
      plan: "Standard",
      startDate: "2025-03-01",
      endDate: "2025-12-31",
      status: "Active"
    },
    { 
      id: 3,
      school: "Safe Wheels Driving School",
      plan: "Free",
      startDate: "2025-01-15",
      endDate: "2025-06-30",
      status: "Expired"
    }
  ]);

  const getStatusClass = (status) => {
    switch(status) {
      case "Active": return "status-active";
      case "Expired": return "status-expired";
      case "Cancelled": return "status-cancelled";
      default: return "";
    }
  };

  return (
    <div className="crud-container">
      <h2>Subscriptions (Admin View)</h2>
      <table>
        <thead>
          <tr>
            <th>Driving School</th>
            <th>Plan</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((s) => (
            <tr key={s.id} className="table-row">
              <td>{s.school}</td>
              <td>{s.plan}</td>
              <td>{s.startDate}</td>
              <td>{s.endDate}</td>
              <td>
                <span className={`status-badge ${getStatusClass(s.status)}`}>
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
