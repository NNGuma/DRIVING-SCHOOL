import { useState, useEffect } from "react";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import "./Profiles.css";

export default function Profile() {
  const [admin, setAdmin] = useState({
    fullName: "NN Guma",
    email: "admin@drivingsaas.com",
    roles: ["SchoolAdmin"],
    licenseNumber: "LIC-000002"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser && storedUser.email) {
      setAdmin({
        fullName: storedUser.name || "Admin User",
        email: storedUser.email,
        roles: storedUser.roles || ["SchoolAdmin"],
        licenseNumber: storedUser.licenseNumber || "LIC-000002"
      });
    }
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
    localStorage.setItem("user", JSON.stringify(formData));
    setIsEditing(false);
  };

  const handleCancel = () => setIsEditing(false);

  return (
    <div className="instructor-desktop">
      {/* Header */}
      <header className="instructor-header">
        <h1>Admin Profile</h1>
      </header>

      <main className="instructor-content">
        {/* Profile Card */}
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

        {/* Admin Overview */}
        <section className="section">
          <h3>System Overview</h3>
          <div className="course-container">
            <div className="course-card">
              <h4>Total Instructors</h4>
              <p>8 Active</p>
            </div>
            <div className="course-card">
              <h4>Total Students</h4>
              <p>120 Enrolled</p>
            </div>
            <div className="course-card">
              <h4>Pending Approvals</h4>
              <p>3 Requests</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
