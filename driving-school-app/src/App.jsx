import React from "react";
import "./index.css"; // or your CSS file

import Home from "./Home Dashboard/Home";
import Header from "./Home Dashboard/Header";
import Footer from "./Home Dashboard/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
