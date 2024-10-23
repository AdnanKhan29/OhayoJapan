import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { TimelineDemo } from "./Components/TimeLineMain";
import Home from "./Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<TimelineDemo />} />
      </Routes>
      <Navbar />
    </>
  );
}
