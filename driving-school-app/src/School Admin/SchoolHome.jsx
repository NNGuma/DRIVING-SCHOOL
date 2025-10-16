import React from "react";
import { Routes, Route } from "react-router-dom";
import SchoolHeader from "./SchoolHeader"; 
import Learners from "./Learners"; 
import Instructors from "./Instructors"; 
import Courses from "./Courses"; 
import Dashboard from "./Dashboard"; 
import { FaMoneyBillWave, FaUserGraduate, FaBook, FaSchool, FaCalendarAlt, FaChalkboardTeacher, FaCrown } from "react-icons/fa";
import UserSubscription from "./UserSubscription";
import BookingTable from "./BookingTable";



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
       <Route path="BookingTable" element={<BookingTable />} /> 
      </Routes>
    </>
  );//
}
