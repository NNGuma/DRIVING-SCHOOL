// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home Dashboard/Home";
import Header from "./Home Dashboard/Header"; // adjust the path if your Header.jsx is in another folder
import Footer from "./Home Dashboard/Footer";
import Auth from "./Authentication/Auth";
import StudentProfile from "./Profiles/Student";
import InstructorProfile from "./Profiles/Instructor";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Student" element={<StudentProfile />} />
        <Route path="/Instructor" element={<InstructorProfile />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
