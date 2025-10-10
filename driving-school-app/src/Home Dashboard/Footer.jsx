import React from "react";
import "../index.css"; // make sure you have your CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} Redefined-IT group</p>
      </div>
    </footer>
  );
}
