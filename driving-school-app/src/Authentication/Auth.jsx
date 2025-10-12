import { useState } from "react";
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ action: isLogin ? "Login" : "Sign Up", role, ...form });
    alert(`${isLogin ? "Logged in" : "Signed up"} as ${role}`);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-left">
          <h1>Driving School Booking</h1>
        </div>

        <div className="auth-right">
          <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
          <p className="subtitle">
            {isLogin
              ? "Welcome back! Log in to continue."
              : "Create your account below."}
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
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

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />

            {!isLogin && (
              <>
                <label>Select your model</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="Student">Student</option>
                  <option value="Instructor">Instructor</option>
                </select>

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

            <button type="submit" className="auth-btn">
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>

          <p className="toggle-text">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign up" : "Log in"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
