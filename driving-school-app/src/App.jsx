import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./Home Dashboard/Home";
import Footer from "./Home Dashboard/Footer";
import SystemHome from "./System Admin/SystemHome";
import SchoolHome from "./School Admin/SchoolHome";
import SubscriptionTable from "./System Admin/SubscriptionTable";
import Auth from "./Authentication/Auth";
import UserSubscription from "./School Admin/UserSubscription";
import StudentProfile from "./Profiles/Student";
import InstructorProfile from "./Profiles/Instructor";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Area */}
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/subscriptions" element={<SubscriptionTable />} />
          <Route path="/UserSubscription" element={<UserSubscription />} />
          <Route path="/Student" element={<StudentProfile />} />
          <Route path="/Instructor" element={<InstructorProfile />} />

          {/* Admin Sections */}
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
  );
}

export default App;
