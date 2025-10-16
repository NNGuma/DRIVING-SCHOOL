import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../TableStyles.css";

export default function UserSubscription() {
  const [subscriptions] = useState([
    {
      id: 1,
      plan: "Free",
      price: "R0 / month",
      features: ["Basic dashboard", "1 instructor", "10 learners", "Email support"],
    },
    {
      id: 2,
      plan: "Standard",
      price: "R199 / month",
      features: ["All Free features", "5 instructors", "100 learners", "Priority support"],
    },
    {
      id: 3,
      plan: "Premium",
      price: "R399 / month",
      features: ["Unlimited instructors", "Unlimited learners", "Custom branding", "24/7 support"],
    },
  ]);

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelect = (planName) => {
    setSelectedPlan(planName);
    alert(`You have selected the ${planName} plan!`);
  };

  return (
    <div className="crud-container">
      <h2>Available Subscription Plans</h2>

      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Price</th>
            <th>Features</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((s) => (
            <tr
              key={s.id}
              className={selectedPlan === s.plan ? "selected-row" : ""}
            >
              <td>{s.plan}</td>
              <td>{s.price}</td>
              <td>
                <ul>
                  {s.features.map((f, index) => (
                    <li key={index}>
                      <FaCheckCircle className="feature-icon" /> {f}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <button
                  className={`select-btn ${
                    selectedPlan === s.plan ? "selected" : ""
                  }`}
                  onClick={() => handleSelect(s.plan)}
                >
                  {selectedPlan === s.plan ? "Selected" : "Choose"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
