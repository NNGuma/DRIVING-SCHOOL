import { useState } from "react";

import { login } from "../api/API";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("Student");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    idNumber: "",
    licenseNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ action: isLogin ? "Login" : "Sign Up", role, ...form });

    alert(`${isLogin ? "Logged in" : "Signed up"} as ${role}`);

    // === ROLE‑BASED ROUTING AFTER LOGIN ===
    if (isLogin) {
      switch (role) {
        case "Student":
          navigate("/learner");
          break;

        case "Instructor":
          navigate("/instructor");
          break;

        case "System Admin":
          navigate("/system");
          break;

        case "School Admin":
          navigate("/school");
          break;

        default:
          navigate("/");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <div className="auth-container">
          {/* LEFT PANEL */}
          <div className="auth-left">
            <h1>Driving School Booking</h1>
            <p>Your journey to a driver’s license starts here!</p>
          </div>

          {/* RIGHT PANEL */}
          <div className="auth-right">
            <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
            <p className="subtitle">
              {isLogin
                ? "Welcome back! Log in to continue."
                : "Create your account below."}
            </p>

            <form onSubmit={handleSubmit} className="auth-form">
              {/* FULL NAME (SIGNUP ONLY) */}
              {!isLogin && (
                <>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </>
              )}

              {/* EMAIL */}
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              {/* PASSWORD */}
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />

              {/* ROLE SELECTION (SIGNUP ONLY) */}
              {!isLogin && (
                <>
                  <label>Select your role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="Student">Student</option>
                    <option value="Instructor">Instructor</option>
                    <option value="School Admin">School Admin</option>
                    <option value="System Admin">System Admin</option>
                  </select>

                  {/* STUDENT EXTRA FIELD */}
                  {role === "Student" && (
                    <>
                      <label>ID Number</label>
                      <input
                        type="text"
                        name="idNumber"
                        value={form.idNumber}
                        onChange={handleChange}
                        placeholder="Enter your ID number"
                        required
                      />
                    </>
                  )}

                  {/* INSTRUCTOR EXTRA FIELD */}
                  {role === "Instructor" && (
                    <>
                      <label>License Number</label>
                      <input
                        type="text"
                        name="licenseNumber"
                        value={form.licenseNumber}
                        onChange={handleChange}
                        placeholder="Enter your license number"
                        required
                      />
                    </>
                  )}
                </>
              )}

              {/* SUBMIT BUTTON */}
              <button type="submit" className="auth-btn">
                {isLogin ? "Log In" : "Sign Up"}
              </button>
            </form>

            {/* TOGGLE LOGIN/SIGNUP */}
            <p className="toggle-text">
              {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
              <span onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign up" : "Log in"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
