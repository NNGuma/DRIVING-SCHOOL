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

  const handleChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSave = () => alert("Profile updated successfully!");

  return (
    <div className="crud-container profile-container"> {/* ✅ reused */}
      <h2>
        <FaUser className="feature-icon" /> My Profile
      </h2>

      <div className="profile-table-wrapper"> {/* ✅ reused */}
        <table className="profile-table"> {/* ✅ reused */}
          <tbody>
            <tr>
              <td className="profile-label">Full Name</td>
              <td className="profile-field">
                <input
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td className="profile-label">Email</td>
              <td className="profile-field">
                <input
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td className="profile-label">Phone</td>
              <td className="profile-field">
                <input
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td className="profile-label">Address</td>
              <td className="profile-field">
                <input
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td className="profile-label">License Code</td>
              <td className="profile-field">
                <input
                  name="licenseCode"
                  value={profile.licenseCode}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="save-btn profile-save-btn" onClick={handleSave}>
        <FaSave /> Save
      </button>
    </div>
  );
}
