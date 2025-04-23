import React from 'react';

const Home = () => {
  const handleWatchNowClick = () => {
    // Replace with the desired YouTube video URL
    const youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    window.open(youtubeUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="relative h-[95vh] w-full">
      {/* Background Image */}
      <img
        src="https://www.krqe.com/wp-content/uploads/sites/12/2022/05/e92ed228a6924420a8963bdc6c9ddef1.jpg"
        alt="Movie Poster"
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 flex items-end justify-center">
        <div className="text-center mb-30 p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Instant Streaming!
          </h1>
          <p className="text-2xl md:text-2xl font-bold text-white mb-5">
            No registration. No subscription.
          </p>
          <button
            onClick={handleWatchNowClick}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white ml-40 cursor-pointer px-6 py-3 rounded-full shadow-md transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
