import React, { useEffect, useState } from 'react';

const TVShows = () => {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [displayedShows, setDisplayedShows] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch all TV shows once
  useEffect(() => {
    setLoading(true);
    fetch('https://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => {
        setShows(data); // Save all TV shows to state
        const englishHindiShows = data.filter(
          (show) => show.language === 'English' || show.language === 'Hindi'
        );
        setFilteredShows(englishHindiShows); // Filter English/Hindi TV shows
        setDisplayedShows(englishHindiShows.slice(0, 12)); // Display the first 12 shows initially
        setLoading(false);
      });
  }, []);

  // Handle load more functionality
  const loadMoreShows = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    const nextShows = filteredShows.slice(nextPage * 12, (nextPage + 1) * 12);
    setDisplayedShows((prevShows) => [...prevShows, ...nextShows]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">TV Shows (English/Hindi)</h2>
      <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-4 gap-4">
        {displayedShows.map((show) => (
          <a
            key={show.id}
            href={show.officialSite || show.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-base-200 shadow-xl p-4 hover:scale-[1.02] transition-transform duration-200"
          >
            <img src={show.image?.medium} alt={show.name} className="rounded mb-2" />
            <h3 className="text-lg font-semibold">{show.name}</h3>
          </a>
        ))}
      </div>

      {filteredShows.length > displayedShows.length && !loading && (
        <button
          onClick={loadMoreShows}
          className="btn btn-primary mt-4"
        >
          Load More
        </button>
      )}

      {loading && <div className="mt-4">Loading...</div>}
    </div>
  );
};

export default TVShows;
