import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const isActive = (path) => location.pathname === path;

  const navLinkStyle = (path) =>
    isActive(path) ? 'font-semibold text-primary' : 'hover:text-primary';

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link className={navLinkStyle('/')} to="/">Home</Link></li>
            <li><Link className={navLinkStyle('/movies')} to="/movies">Movies</Link></li>
            <li><Link className={navLinkStyle('/webseries')} to="/webseries">WebSeries</Link></li>
            <li><Link className={navLinkStyle('/songs')} to="/songs">Songs</Link></li>
            <li><Link className={navLinkStyle('/tvshows')} to="/tvshows">TVShows</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Movie Dekho</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link className={navLinkStyle('/')} to="/">Home</Link></li>
          <li><Link className={navLinkStyle('/movies')} to="/movies">Movies</Link></li>
          <li><Link className={navLinkStyle('/webseries')} to="/webseries">WebSeries</Link></li>
          <li><Link className={navLinkStyle('/songs')} to="/songs">Songs</Link></li>
          <li><Link className={navLinkStyle('/tvshows')} to="/tvshows">TVShows</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <label className="input input-bordered flex items-center gap-2 hidden sm:flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
