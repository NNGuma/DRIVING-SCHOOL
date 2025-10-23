import React, { useState } from "react";
import { FaHeadset, FaPaperPlane } from "react-icons/fa";
import "../TableStyles.css";

export default function Support() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return alert("Please enter a message");
    alert("Your message has been sent to the school support team.");
    setMessage("");
  };

  return (
    <div className="crud-container">
      <h2><FaHeadset className="feature-icon" /> Support</h2>
      <p>Need help? Send a message to your driving school’s support team.</p>
      <textarea
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        style={{
          width: "100%",
          background: "#222",
          color: "white",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "12px",
        }}
      />
      <button className="add-btn" onClick={handleSend}><FaPaperPlane /> Send Message</button>
    </div>
  );
}
