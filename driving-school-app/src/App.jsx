// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

/* === Home Dashboard === */
import Home from "./Home Dashboard/Home";
import Footer from "./Home Dashboard/Footer";
import ContactUs from "./Home Dashboard/ContactUs";

/* === Authentication === */
import Auth from "./Authentication/Auth";

/* === System Admin === */
import SystemHome from "./System Admin/SystemHome";
import SubscriptionTable from "./System Admin/SubscriptionTable";

/* === School Admin === */
import SchoolHome from "./School Admin/SchoolHome";
import UserSubscription from "./School Admin/UserSubscription";

/* === Learner Section === */
import LearnerDashboard from "./Learner/LearnerDashBoard";
import BookLesson from "./Learner/BookLesson";
import LearnerLessons from "./Learner/MyLessons";
import ProgressTracker from "./Learner/ProgressTracker";
import PaymentHistory from "./Learner/PaymentHistory";
import LearnerProfile from "./Learner/Profile";
import Support from "./Learner/Support";

/* === Instructor Section === */
import InstructorDashboard from "./Instructor/InstructorDashboard";
import MyLessons from "./Instructor/MyLessons";
import ManageProgress from "./Instructor/ManageProgress";
import LearnerList from "./Instructor/LearnerList";
import ScheduleAvailability from "./Instructor/ScheduleAvailability";
import IProfile from "./Instructor/I-Profile";

/* === Payments Section (GLOBAL) === */
import PaymentGateway from "./payments/PaymentGateway";
import Wallets from "./payments/Wallets";
import PaymentSummary from "./payments/PaymentSummary";
import DeclinedPayments from "./payments/DeclinedPayments";
import RefundRequest from "./payments/RefundRequest";
import SubscriptionBilling from "./payments/SubscriptionBilling";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          {/* === Public Area === */}
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/subscriptions" element={<SubscriptionTable />} />
          <Route path="/UserSubscription" element={<UserSubscription />} />

          {/* === System Admin === */}
          <Route path="/system/*" element={<SystemHome />} />

          {/* === School Admin === */}
          <Route path="/school/*" element={<SchoolHome />} />

          {/* === Learner Section === */}
          <Route path="/learner" element={<LearnerDashboard />} />
          <Route path="/learner/book" element={<BookLesson />} />
          <Route path="/learner/lessons" element={<LearnerLessons />} />
          <Route path="/learner/progress" element={<ProgressTracker />} />
          <Route path="/learner/payments" element={<PaymentHistory />} />
          <Route path="/learner/profile" element={<LearnerProfile />} />
          <Route path="/learner/support" element={<Support />} />

          {/* === Instructor Section === */}
          <Route path="/instructor/*" element={<InstructorDashboard />} />
          <Route path="/instructor/lessons" element={<MyLessons />} />
          <Route path="/instructor/progress" element={<ManageProgress />} />
          <Route path="/instructor/learners" element={<LearnerList />} />
          <Route path="/instructor/schedule" element={<ScheduleAvailability />} />
          <Route path="/instructor/I-Profile" element={<IProfile />} />

          {/* === Payments Section === */}
          <Route path="/payments/gateway" element={<PaymentGateway />} />
          <Route path="/payments/wallet" element={<Wallets />} />
          <Route path="/payments/summary" element={<PaymentSummary />} />   {/* FIXED */}
          <Route path="/payments/declined" element={<DeclinedPayments />} />
          <Route path="/payments/refund" element={<RefundRequest />} />
          <Route path="/payments/subscriptions" element={<SubscriptionBilling />} />

        </Routes>
      </Layout>
    </Router>
  );
}

/* === Layout Component === */
function Layout({ children }) {
  return (
    <div className="app-container">
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default App;
