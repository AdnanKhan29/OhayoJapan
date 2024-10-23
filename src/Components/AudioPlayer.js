import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "./AudioPlayer.css"; // Import the custom CSS for styling

export default function AudioPlayer() {
  const audioRef = useRef(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false); // Initially set to false until user interaction

  // Automatically play the audio when the component is mounted
  useEffect(() => {
    const audioElement = audioRef.current;

    // Try to play the audio automatically
    if (audioElement) {
      audioElement
        .play()
        .then(() => {
          setIsPlaying(true); // Set to true once the audio starts playing
        })
        .catch((error) => {
          console.log("Auto-play was prevented by the browser:", error); // Auto-play might be blocked by the browser
        });
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Toggle play/pause functionality
  const togglePlayPause = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying); // Toggle the play/pause state
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} loop>
        <source src="/assets/aud.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>

      {/* Play or Pause button with Font Awesome icons */}
      <button className="audio-button" onClick={togglePlayPause}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="2x" />
      </button>
    </div>
  );
}
