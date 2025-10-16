import React from "react";

import DrivingSchools from "./DrivingSchools"; 
import SystemHeader from "./SystemHeader";







export default function SystemHome() {
  return (
    <>
  
  <SystemHeader />

    <Routes>
            {/* Home page */}
            <Route path="/" element={<About />} />
    
            {/* Other pages */}
            <Route path="DrivingSchools" element={<DrivingSchools />} />
            <Route path="instructors" element={<Instructors />} />
            <Route path="courses" element={<Courses />} />
          </Routes>


<DrivingSchools/>
   
    </>
  );
}
