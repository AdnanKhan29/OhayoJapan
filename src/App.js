import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { TimelineDemo2 } from "./Components/TimeLineMain2";
import Home from "./Home";
import { TimelineDemo } from "./Components/TimeLineMain";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day1" element={<TimelineDemo />} />
        <Route path="/day2" element={<TimelineDemo2 />} />
      </Routes>
      <Navbar />
    </>
  );
}
