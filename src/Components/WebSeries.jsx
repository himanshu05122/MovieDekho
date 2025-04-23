import React, { useEffect, useState } from 'react';

const WebSeries = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  const fetchSeries = async (pageNumber) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=web&type=series&page=${pageNumber}&apikey=e6e019e2`
      );
      const data = await response.json();

      if (data.Response === 'True' && Array.isArray(data.Search)) {
        setSeries((prevSeries) => [...prevSeries, ...data.Search]);
        setTotalResults(parseInt(data.totalResults, 10));
      } else {
        if (pageNumber === 1) setSeries([]);
        setError(data.Error || 'Unexpected response format');
      }
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeries(page);
  }, [page]);

  const loadMore = () => {
    if (series.length < totalResults) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Web Series</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-4 gap-4">
        {series.map((show) => (
          <a
            key={show.imdbID}
            href={`https://www.imdb.com/title/${show.imdbID}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-base-200 shadow-xl p-4 hover:scale-[1.02] transition-transform duration-200"
          >
            <img
              src={show.Poster !== 'N/A' ? show.Poster : 'default.jpg'}
              alt={show.Title}
              className="rounded mb-2"
            />
            <h3 className="text-lg font-semibold">{show.Title}</h3>
            <p>{show.Year}</p>
          </a>
        ))}
      </div>
      {loading && <p className="mt-4">Loading...</p>}
      {!loading && series.length < totalResults && (
        <button onClick={loadMore} className="btn btn-primary mt-4">
          Load More
        </button>
      )}
    </div>
  );
};

export default WebSeries;
