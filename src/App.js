import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { TimelineDemo2 } from "./Components/TimeLineMain2";
import Home from "./Home";
import { TimelineDemo } from "./Components/TimeLineMain";
import AudioPlayer from "./Components/AudioPlayer"; // Import the audio player
import { Activity } from "./Components/Activity";
import { ProjectDetails } from "./Components/ProjectDetails";
export default function App() {
  return (
    <>
      {/* AudioPlayer will persist across all routes */}
      <AudioPlayer />

      {/* Navigation routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day1" element={<TimelineDemo />} />
        <Route path="/day2" element={<TimelineDemo2 />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/project/:title" element={<ProjectDetails />} />
      </Routes>

      <Navbar />
    </>
  );
}
