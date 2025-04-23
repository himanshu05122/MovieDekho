import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (query) {
      fetch(`http://www.omdbapi.com/?apikey=e6e019e2&s=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Search) {
            setResults(data.Search);
          } else {
            setResults([]);
          }
        });
    }
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {results.map((item) => (
          <div key={item.imdbID} className="card bg-base-200 shadow-lg p-4">
            <h3 className="font-semibold mb-2">{item.Title}</h3>
            <img src={item.Poster} alt={item.Title} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
