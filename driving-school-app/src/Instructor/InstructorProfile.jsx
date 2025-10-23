import React, { useState } from "react";
import { FaUserCog, FaSave } from "react-icons/fa";
import "../TableStyles.css";

export default function InstructorProfile() {
  const [profile, setProfile] = useState({
    fullName: "John Mokoena",
    email: "john@drivingschool.com",
    phone: "0812345678",
    licenseType: "Code 10",
    experienceYears: 5,
  });

  const handleChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSave = () => alert("Profile updated successfully!");

  return (
    <div className="crud-container">
      <h2><FaUserCog className="feature-icon" /> My Profile</h2>
      <table>
        <tbody>
          <tr><td>Full Name</td><td><input name="fullName" value={profile.fullName} onChange={handleChange} /></td></tr>
          <tr><td>Email</td><td><input name="email" value={profile.email} onChange={handleChange} /></td></tr>
          <tr><td>Phone</td><td><input name="phone" value={profile.phone} onChange={handleChange} /></td></tr>
          <tr><td>License Type</td><td><input name="licenseType" value={profile.licenseType} onChange={handleChange} /></td></tr>
          <tr><td>Experience (Years)</td><td><input type="number" name="experienceYears" value={profile.experienceYears} onChange={handleChange} /></td></tr>
        </tbody>
      </table>
      <button className="save-btn" onClick={handleSave}><FaSave /> Save Changes</button>
    </div>
  );
}
