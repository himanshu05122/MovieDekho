import React, { useState, useRef } from 'react';
import Khatole from '../assets/2 Khatole(KoshalWorld.Com).mp3';
import Gundey from '../assets/Gundey Dore Pe(KoshalWorld.Com).mp3';
import Badmash from '../assets/Badmash Jamai(KoshalWorld.Com).mp3';

const Songs = () => {
  const [currentSongId, setCurrentSongId] = useState(null);
  const audioRef = useRef(null);

  const mockSongs = [
    {
      id: 1,
      title: 'Gundey Dore Pe',
      audio: Gundey
    },
    {
      id: 2,
      title: '2 Khatole',
      audio: Khatole
    },
    {
      id: 3,
      title: 'Badmass Jamai',
      audio: Badmash
    }
  ];

  const handleSongClick = (id) => {
    if (currentSongId === id) {
      // If the same song is clicked again, pause it
      audioRef.current.pause();
      setCurrentSongId(null);
    } else {
      // Pause the current song if another song is selected
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentSongId(id);
      audioRef.current = document.getElementById(`audio-${id}`);
      audioRef.current.play();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Songs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockSongs.map((song) => (
          <div
            key={song.id}
            className="card bg-base-200 shadow-lg p-4"
            onClick={() => handleSongClick(song.id)} // Play or pause song on click
          >
            <h3 className="font-semibold mb-2">{song.title}</h3>
            <audio
              id={`audio-${song.id}`}
              controls
              className="w-full"
              src={song.audio}
              style={{ display: currentSongId === song.id ? 'block' : 'none' }} // Only show controls for the active song
            >
              Your browser does not support the audio tag.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songs;
