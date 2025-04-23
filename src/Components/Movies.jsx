import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch all movies once
  useEffect(() => {
    setLoading(true);
    fetch('https://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => {
        // Filter Hindi and English movies
        const hindiMovies = data.filter(movie => movie.language === 'Hindi');
        const englishMovies = data.filter(movie => movie.language === 'English');
        
        // Combine Hindi and English movies (Hindi first)
        const sortedMovies = [...hindiMovies, ...englishMovies];
        
        setMovies(sortedMovies);
        setDisplayedMovies(sortedMovies.slice(0, 12));
        setLoading(false);
      });
  }, []);

  // Handle load more functionality
  const loadMoreMovies = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    const nextMovies = movies.slice(nextPage * 12, (nextPage + 1) * 12);
    setDisplayedMovies(prevMovies => [...prevMovies, ...nextMovies]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Movies</h2>
      <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-4 gap-4">
        {displayedMovies.map(movie => (
          <a
            key={movie.id}
            href={movie.officialSite || movie.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-base-200 shadow-xl p-4 hover:scale-[1.02] transition-transform duration-200"
          >
            <img
              src={movie.image?.medium}
              alt={movie.name}
              className="rounded mb-2"
            />
            <h3 className="text-lg font-semibold">{movie.name}</h3>
          </a>
        ))}
      </div>

      {/* Load More Button */}
      {movies.length > displayedMovies.length && !loading && (
        <button
          onClick={loadMoreMovies}
          className="btn btn-primary mt-4"
        >
          Load More
        </button>
      )}

      {/* Show loading indicator when fetching more movies */}
      {loading && <div className="mt-4">Loading...</div>}
    </div>
  );
};

export default Movies;
