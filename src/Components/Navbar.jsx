import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SpotifyLogo from "../Images/logo.png";
import { BsHouseDoorFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query === '') {
      setSearchResults([]); 
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.data);
      } else {
        console.error('Error fetching search results');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
      <div className="container flex-column align-items-start">
        <a className="navbar-brand" href="a">
          <img src={SpotifyLogo} alt="Spotify Logo" width="131" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul>
              <li>
                <Link className="nav-item nav-link d-flex align-items-center" to="/">
                  <BsHouseDoorFill />&nbsp; Home
                </Link>
              </li>
              <li>
                <Link className="nav-item nav-link d-flex align-items-center" to="/favorites">
                  <FaHeart />&nbsp; I tuoi preferiti
                </Link>
              </li>
              <li>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleInputChange}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary btn-sm h-100" onClick={handleSearch}>Cerca</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="search-results" style={{ maxHeight: 'calc(100vh - 56px)', overflowY: 'auto' }}>
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {searchResults.map((result, index) => (
      <li key={index} style={{ color: 'white', marginBottom: '10px' }}>{result.title}</li>
    ))}
  </ul>
</div>
      <div className="nav-btn">
        <button className="btn btn-light signup-btn" type="button">Sign Up</button>
        <button className="btn btn-dark login-btn" type="button">Login</button>
        <a href="#a"> Privacy</a> | 
        <a href="#a"> Cookie Policy</a> 
      </div>
    </nav>
  );
}

export default Navbar;