<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> 4c26943c9401305839bd66d60abc1c07c4c77a92
import Home from "./Home Dashboard/Home";
import Footer from "./Home Dashboard/Footer";
<<<<<<< HEAD
import SystemHome from "./System Admin/SystemHome";
import SchoolHome from "./School Admin/SchoolHome";
import SubscriptionTable from "./System Admin/SubscriptionTable"; // ✅ Import Subscription Table
import Auth from "./Authentication/Auth";
import UserSubscription from "./School Admin/UserSubscription";




=======
import Auth from "./Authentication/Auth";
import StudentProfile from "./Profiles/Student";
import InstructorProfile from "./Profiles/Instructor";
>>>>>>> 4c26943c9401305839bd66d60abc1c07c4c77a92

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Layout>
        <Routes>
          {/* Public area */}
          <Route path="/" element={<Home />} />
          <Route path="/subscriptions" element={<SubscriptionTable />} /> {/* ✅ New route */}
            
          <Route path="/auth" element={<Auth />} /> {/* Authentication route */}
            <Route path="/UserSubscription" element={< UserSubscription/>} /> {/* 👈 Add this route */}
          {/* Admin sections */}
          <Route path="/system" element={<SystemHome />} />
          <Route path="/school/*" element={<SchoolHome />} />
        </Routes>
      </Layout>
    </Router>
  );
}
function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      {/* Footer always visible */}
      <Footer />
   
    </>
=======
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Student" element={<StudentProfile />} />
        <Route path="/Instructor" element={<InstructorProfile />} />
      </Routes>
      <Footer/>
    </Router>
>>>>>>> 4c26943c9401305839bd66d60abc1c07c4c77a92
  );
}

export default App;
