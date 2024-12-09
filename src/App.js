import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Transport from "./Transport";
import Events from "./Events";
import Subway from "./Subway";
import Services from "./Services";
import Academics from "./Academics";

function App() {
  return (
    <Router basename="/uidesign-btown">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/events" element={<Events />} />
        <Route path="/subway" element={<Subway />} />
        <Route path="/services" element={<Services />} />
        <Route path="/academics" element={<Academics />} />
      </Routes>
    </Router>
  );
}

export default App;
