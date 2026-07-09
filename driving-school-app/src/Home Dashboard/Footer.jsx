import React from "react";
import "../index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} Thandi M</p>
      </div>
    </footer>
  );
}
