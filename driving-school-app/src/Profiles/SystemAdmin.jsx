import { useState, useEffect } from "react";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import "../TableStyles.css";

export default function SystemAdminProfile() {
  const [admin, setAdmin] = useState({
    fullName: "System Administrator",
    email: "admin@drivingsaas.com",
    roles: ["SystemAdmin"],
    licenseNumber: "LIC-000001"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("systemAdminProfile") || "{}");
    if (stored.fullName) setAdmin(stored);
  }, []);

  const handleEdit = () => {
    setFormData(admin);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setAdmin(formData);
    localStorage.setItem("systemAdminProfile", JSON.stringify(formData));
    setIsEditing(false);
  };

  const handleCancel = () => setIsEditing(false);

  return (
    <div className="instructor-desktop">
      <header className="instructor-header">
        <h1>System Admin Profile</h1>
      </header>

      <main className="instructor-content">
        {/* Profile Info */}
        <section className="profile-card">
          <h2>Personal Information</h2>
          {!isEditing ? (
            <>
              <p><strong>Full Name:</strong> {admin.fullName}</p>
              <p><strong>Email:</strong> {admin.email}</p>
              <p><strong>License Number:</strong> {admin.licenseNumber}</p>
              <p><strong>Role:</strong> {admin.roles.join(", ")}</p>
              <button className="edit-btn" onClick={handleEdit}>
                <FaEdit /> Edit Profile
              </button>
            </>
          ) : (
            <div className="edit-form">
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                License Number:
                <input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                />
              </label>
              <p><strong>Role:</strong> {formData.roles.join(", ")}</p>
              <div className="form-buttons">
                <button className="save-btn" onClick={handleSave}>
                  <FaSave /> Save
                </button>
                <button className="cancel-btn" onClick={handleCancel}>
                  <FaTimes /> Cancel
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Overview */}
        <section className="section">
          <h3>System Overview</h3>
          <div className="course-container">
            <div className="course-card"><h4>Total Schools</h4><p>12 Active</p></div>
            <div className="course-card"><h4>Total Users</h4><p>542 Registered</p></div>
            <div className="course-card"><h4>Pending Verifications</h4><p>5 Requests</p></div>
          </div>
        </section>
      </main>
    </div>
  );
}
