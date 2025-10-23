import { useState, useEffect } from "react";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import "./Profiles.css";

export default function StudentProfile() {
  const [student, setStudent] = useState({
    fullName: "Thalente Sithole",
    email: "thalentesithole1@gmail.com",
    idNumber: "0103046149086",
    enrolledCourses: [
      { title: "K53 Driving Course", progress: 60 },
      { title: "Advanced Parking", progress: 0 },
    ],
    bookings: [
      { course: "K53 Driving Course", status: "Confirmed", date: "2025-10-08" },
      { course: "Advanced Parking", status: "Pending", date: "2025-12-17" },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("studentProfile") || "{}");
    if (stored.fullName) setStudent(stored);
  }, []);

  const handleEdit = () => {
    setFormData(student);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setStudent(formData);
    localStorage.setItem("studentProfile", JSON.stringify(formData));
    setIsEditing(false);
  };

  const handleCancel = () => setIsEditing(false);

  return (
    <div className="instructor-desktop">
      <header className="instructor-header">
        <h1>Student Profile</h1>
      </header>

      <main className="instructor-content">
        {/* Profile Info */}
        <section className="profile-card">
          <h2>Personal Information</h2>
          {!isEditing ? (
            <>
              <p><strong>Full Name:</strong> {student.fullName}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>ID Number:</strong> {student.idNumber}</p>
              <button className="edit-btn" onClick={handleEdit}>
                <FaEdit /> Edit Profile
              </button>
            </>
          ) : (
            <div className="edit-form">
              <label>
                Full Name:
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>
              <label>
                ID Number:
                <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} />
              </label>
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

        {/* Courses */}
        <section className="section">
          <h3>My Courses</h3>
          <div className="course-container">
            {student.enrolledCourses.map((course, index) => (
              <div key={index} className="course-card">
                <h4>{course.title}</h4>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p>{course.progress}% complete</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bookings */}
        <section className="section">
          <h3>My Bookings</h3>
          <table className="booking-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {student.bookings.map((b, i) => (
                <tr key={i}>
                  <td>{b.course}</td>
                  <td>{b.date}</td>
                  <td className={`status-${b.status.toLowerCase()}`}>
                    {b.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
