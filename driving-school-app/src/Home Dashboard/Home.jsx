import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Import these
import Header from "./Header";
import About from "./About";
import Contact from "./ContactUs";


export default function Home() {
  return (
    <>
      <Header />
      <About />

      <Routes>
        <Route path="contact" element={<Contact />} />
        
      </Routes>
    </>
  );
}
