import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

/* === Home Dashboard === */
import Home from "./Home Dashboard/Home";
import Footer from "./Home Dashboard/Footer";

/* === Authentication === */
import Auth from "./Authentication/Auth";

/* === System Admin === */
import SystemHome from "./System Admin/SystemHome";
import SubscriptionTable from "./System Admin/SubscriptionTable";

/* === School Admin === */
import SchoolHome from "./School Admin/SchoolHome";
import UserSubscription from "./School Admin/UserSubscription";

/* === Profiles === */
import StudentProfile from "./Profiles/Student";
import InstructorProfile from "./Profiles/Instructor";

/* === Learner Section === */
import LearnerDashboard from "./Learner/LearnerDashBoard";
import BookLesson from "./Learner/BookLesson";
import LearnerLessons from "./Learner/MyLessons";
import ProgressTracker from "./Learner/ProgressTracker";
import PaymentHistory from "./Learner/PaymentHistory";
import LearnerProfile from "./Learner/Profile";
import Support from "./Learner/Support";

//* === Instructor === */
import InstructorDashboard from "./Instructor/InstructorDashboard";
import MyLessons from "./Instructor/MyLessons";
import ManageProgress from "./Instructor/ManageProgress";
import LearnerList from "./Instructor/LearnerList";
import ScheduleAvailability from "./Instructor/ScheduleAvailability";
//import InstructorProfile from "./Instructor/InstructorProfile";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* === Public Area === */}
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/subscriptions" element={<SubscriptionTable />} />
          <Route path="/UserSubscription" element={<UserSubscription />} />
          <Route path="/Student" element={<StudentProfile />} />
          <Route path="/Instructor" element={<InstructorProfile />} />

          {/* === System Admin Section === */}
          <Route path="/system/*" element={<SystemHome />} />

          {/* === School Admin Section === */}
          <Route path="/school/*" element={<SchoolHome />} />



          {/* === Learner Section === */}
          <Route path="/learner" element={<LearnerDashboard />} />
          <Route path="/learner/book" element={<BookLesson />} />
          <Route path="/learner/lessons" element={<LearnerLessons />} />
          <Route path="/learner/progress" element={<ProgressTracker />} />
          <Route path="/learner/payments" element={<PaymentHistory />} />
          <Route path="/learner/profile" element={<LearnerProfile />} />
          <Route path="/learner/support" element={<Support />} />

           {/* === Instrctuctor Section === */}
          <Route path="/instructor/*" element={<InstructorDashboard />} />
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/instructor/lessons" element={<MyLessons />} />
          <Route path="/instructor/progress" element={<ManageProgress />} />
          <Route path="/instructor/learners" element={<LearnerList />} />
          <Route path="/instructor/schedule" element={<ScheduleAvailability />} />
        

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
