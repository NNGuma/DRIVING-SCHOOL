import React from "react";
import { Routes, Route } from "react-router-dom";
import SystemHeader from "./SystemHeader"; 
import DrivingSchools from "./DrivingSchools"; 

import Dashboard from "../School Admin/Dashboard"; 
//import { FaMoneyBillWave, FaUserGraduate, FaBook, FaSchool, FaCalendarAlt, FaChalkboardTeacher, FaCrown } from "react-icons/fa";
import SubscriptionTable from './SubscriptionTable';
import PaymentsTable from "./PaymentsTable";
import UsersTable from "./UsersTable";
import SystemAdminProfile from "../Profiles/SystemAdmin";


export default function SystemHome() {
  return (
    <>
      <SystemHeader/>
     

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Dashboard />} />

        {/* Other pages */}
        <Route path="DrivingSchools" element={<DrivingSchools />} />
        <Route path="SubscriptionTable" element={< SubscriptionTable/>} /> {/* 👈 Add this route */}
          <Route path="PaymentsTable" element={<PaymentsTable />} /> 
          <Route path="UsersTable" element={<UsersTable />} />
          <Route path="Profile" element={<SystemAdminProfile />} />
        
      </Routes>
    </>
  );//
}
