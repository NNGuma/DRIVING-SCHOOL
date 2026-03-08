import { useState, useEffect } from "react";
import "./Profiles.css";

export default function InstructorProfile() {
  const [instructor, setInstructor] = useState({
    fullName: "Gift Jobe",
    email: "GiftJobe02@mail.com",
    licenseNumber: "LIC-992248",
    totalStudents: 35,
    rating: 4.7,
    coursesTaught: [
      { title: "K53 Driving Course", enrolled: 20 },
      { title: "Defensive Driving", enrolled: 15 },
    ],
    upcomingBookings: [
      { student: "Sihle Dladla", date: "2025-10-20", course: "K53 Driving Course", status: "Confirmed" },
      { student: "Samkelo Luthuli", date: "2025-10-19", course: "Defensive Driving", status: "Pending" },
    ],
  });

  useEffect(() => {
    // This will fetch instructor data from backend later.
  }, []);

  return (
    <div className="instructor-desktop dark">
      <header className="instructor-header">
        <h1>Instructor Profile</h1>
      </header>

      <main className="instructor-content">
        {/* Basic Info */}
        <section className="profile-card">
          <h2>{instructor.fullName}</h2>
          <p><strong>Email:</strong> {instructor.email}</p>
          <p><strong>License Number:</strong> {instructor.licenseNumber}</p>
          <p><strong>Total Students:</strong> {instructor.totalStudents}</p>
        </section>

        {/* Courses Taught */}
        <section className="section">
          <h3>Courses Taught</h3>
          <div className="course-container">
            {instructor.coursesTaught.map((course, index) => (
              <div key={index} className="course-card">
                <h4>{course.title}</h4>
                <p><strong>Enrolled Students:</strong> {course.enrolled}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Bookings */}
        <section className="section">
          <h3>Upcoming Lessons</h3>
          <table className="booking-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {instructor.upcomingBookings.map((b, i) => (
                <tr key={i}>
                  <td>{b.student}</td>
                  <td>{b.course}</td>
                  <td>{b.date}</td>
                  <td className={`status-${b.status.toLowerCase()}`}>{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
