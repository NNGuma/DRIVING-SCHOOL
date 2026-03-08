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
    <div className="crud-container profile-container"> {/* ✅ added class */}
      <h2>
        <FaUserCog className="feature-icon" /> My Profile
      </h2>

      <div className="profile-table-wrapper"> {/* ✅ new wrapper */}
        <table className="profile-table"> {/* ✅ new table class */}
          <tbody>
            <tr>
              <td className="profile-label">Full Name</td>
              <td className="profile-field">
                <input name="fullName" value={profile.fullName} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td className="profile-label">Email</td>
              <td className="profile-field">
                <input name="email" value={profile.email} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td className="profile-label">Phone</td>
              <td className="profile-field">
                <input name="phone" value={profile.phone} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td className="profile-label">License Type</td>
              <td className="profile-field">
                <input name="licenseType" value={profile.licenseType} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td className="profile-label">Experience (Years)</td>
              <td className="profile-field">
                <input
                  type="number"
                  name="experienceYears"
                  value={profile.experienceYears}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="save-btn profile-save-btn" onClick={handleSave}>
        <FaSave /> Save Changes
      </button>
    </div>
  );
}
