import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Songs from './Components/Songs';
import WebSeries from './Components/WebSeries';
import TVShows from './Components/TVShows';
import Footer from './Components/Footer';
import Question from './Components/Question';
import Screen from './Components/Screen';
import Search from './Components/Search';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/webseries" element={<WebSeries />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <Screen />
      <Question />
      <Footer />
    </Router>
  );
};

export default App;
