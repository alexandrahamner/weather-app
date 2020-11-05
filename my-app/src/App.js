import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="weather-card">
        <input
          type="text"
          className="search-bar"
          placeholder="Search a city"
        />
      </div>
    </div>
  );
}

export default App;
