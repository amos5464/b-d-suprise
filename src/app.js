import React, { useState, useEffect, useRef } from 'react';
import SisterSlide from './components/SisterSlide';
import BirthdayCard from './components/BirthdayCard';
import './styles.css';

function App() {
  const [currentSister, setCurrentSister] = useState(null);
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay compliance

  // Auto-unmute on first user interaction
  useEffect(() => {
    const handleFirstClick = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        setIsMuted(false);
        audioRef.current.play().catch(e => console.log("Playback failed:", e));
      }
      document.removeEventListener('click', handleFirstClick);
    };
    document.addEventListener('click', handleFirstClick);
    return () => document.removeEventListener('click', handleFirstClick);
  }, []);

  const sister1 = {
    name: "victoria",
    images: Array.from({length: 10}, (_, i) => `images/sister1/pic${i+1}.jpg`),
    birthdayMessage: "Happy Birthday to the most amazing sister! ✨"
  };

  const sister2 = {
    name: "Florence",
    images: Array.from({length: 10}, (_, i) => `images/sister2/pic${i+1}.jpg`),
    birthdayMessage: "To my wonderful sister, may your day be magical! 💖"
  };

  return (
    <div className="app">
      {/* Music Player (hidden) */}
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        src="audio/birthday-music.mp3" // Your audio file
      />

      {/* Music Control */}
      <button 
        className="music-toggle"
        onClick={() => {
          audioRef.current.muted = !audioRef.current.muted;
          setIsMuted(audioRef.current.muted);
        }}
      >
        {isMuted ? '🔇 Unmute Music' : '🔊 Mute Music'}
      </button>

      {!currentSister ? (
        <div className="sister-selection">
          <h1>👑 Happy Birthday Princesses! 👑</h1>
          <div className="sister-buttons">
            <button onClick={() => setCurrentSister(sister1)}>
              {sister1.name}'s Slideshow
            </button>
            <button onClick={() => setCurrentSister(sister2)}>
              {sister2.name}'s Slideshow
            </button>
          </div>
        </div>
      ) : (
        <>
          <SisterSlide sister={currentSister} onBack={() => setCurrentSister(null)} />
          <BirthdayCard message={currentSister.birthdayMessage} />
        </>
      )}
    </div>
  );
}

export default App;