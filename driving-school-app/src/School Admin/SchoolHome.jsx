import React from "react";
import { Routes, Route } from "react-router-dom";
import SchoolHeader from "./SchoolHeader"; 
import Learners from "./Learners"; 
import Instructors from "./Instructors"; 
import Courses from "./Courses"; 
import Dashboard from "./Dashboard"; 
import { FaMoneyBillWave, FaUserGraduate, FaBook, FaSchool, FaCalendarAlt, FaChalkboardTeacher, FaCrown } from "react-icons/fa";
import UserSubscription from "./UserSubscription";
import Bookings from "./Bookings";
import PaymentTable from "./PaymentTable";
import SchoolProfile from "../Profiles/SchoolAdmin";  



export default function SchoolHome() {
  return (
    <>
      <SchoolHeader />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Dashboard />} />

        {/* Other pages */}
        <Route path="learners" element={<Learners />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="courses" element={<Courses />} />
        <Route path=" UserSubscription" element={< UserSubscription/>} /> {/* 👈 Add this route */}
       <Route path="Bookings" element={<Bookings />} /> 
          <Route path="PaymentTable" element={<PaymentTable />} /> 
            <Route path="SchoolProfile" element={<SchoolProfile />} />
      </Routes>
    </>
  );//
}
