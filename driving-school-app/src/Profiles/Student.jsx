import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Future: Fetch student data from backend
  }, []);

  return (
    <div className="instructor-desktop"> {/* same base container for styling */}
      <header className="instructor-header">
        <h1>Student Profile</h1>
      </header>

      <main className="instructor-content">
        {/* Basic Info */}
        <section className="profile-card">
          <h2>{student.fullName}</h2>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>ID Number:</strong> {student.idNumber}</p>
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
