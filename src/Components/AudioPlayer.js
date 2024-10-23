import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "./AudioPlayer.css"; // Import the custom CSS for styling

export default function AudioPlayer() {
  const audioRef = useRef(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false); // Tracks if the audio is playing

  useEffect(() => {
    const audioElement = audioRef.current;

    const startAudioOnInteraction = () => {
      if (!isPlaying && audioElement) {
        audioElement
          .play()
          .then(() => {
            setIsPlaying(true); // Set to true once the audio starts playing
          })
          .catch((error) => {
            console.log("Autoplay failed:", error);
          });
      }
    };

    // Add event listeners for user interaction
    window.addEventListener("click", startAudioOnInteraction);
    window.addEventListener("scroll", startAudioOnInteraction);
    window.addEventListener("keydown", startAudioOnInteraction);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("click", startAudioOnInteraction);
      window.removeEventListener("scroll", startAudioOnInteraction);
      window.removeEventListener("keydown", startAudioOnInteraction);
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} loop>
        <source src="/assets/aud.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>

      <button className="audio-button" onClick={togglePlayPause}>
        {isPlaying ? (
          <FontAwesomeIcon icon={faPause} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faPlay} size="2x" />
        )}
      </button>
    </div>
  );
}
