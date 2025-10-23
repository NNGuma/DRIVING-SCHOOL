import React, { useState } from "react";
import { FaUser, FaSave } from "react-icons/fa";
import "../TableStyles.css";

export default function Profile() {
  const [profile, setProfile] = useState({
    fullName: "Nomsa Khumalo",
    email: "nomsa@gmail.com",
    phone: "0823456789",
    address: "123 Main Street, Durban",
    licenseCode: "Code 8",
  });

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });
  const handleSave = () => alert("Profile updated successfully!");

  return (
    <div className="crud-container">
      <h2><FaUser className="feature-icon" /> My Profile</h2>
      <table>
        <tbody>
          <tr><td>Full Name</td><td><input name="fullName" value={profile.fullName} onChange={handleChange} /></td></tr>
          <tr><td>Email</td><td><input name="email" value={profile.email} onChange={handleChange} /></td></tr>
          <tr><td>Phone</td><td><input name="phone" value={profile.phone} onChange={handleChange} /></td></tr>
          <tr><td>Address</td><td><input name="address" value={profile.address} onChange={handleChange} /></td></tr>
          <tr><td>License Code</td><td><input name="licenseCode" value={profile.licenseCode} onChange={handleChange} /></td></tr>
        </tbody>
      </table>
      <button className="save-btn" onClick={handleSave}><FaSave /> Save</button>
    </div>
  );
}
