import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./Home Dashboard/Home";
import Footer from "./Home Dashboard/Footer";
import SystemHome from "./System Admin/SystemHome";
import SchoolHome from "./School Admin/SchoolHome";
import SubscriptionTable from "./System Admin/SubscriptionTable"; // ✅ Import Subscription Table
import Auth from "./Authentication/Auth";
import UserSubscription from "./School Admin/UserSubscription";





function App() {
  return (
    <Router>
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
  );
}

export default App;
