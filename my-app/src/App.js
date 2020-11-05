import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
        <main>
          <div className="weather-card">
              <div className="search-box">
                  <input
                      type="text"
                      className="search-bar"
                      placeholder="Search a city"
                  />
              </div>
          </div>
        </main>
    </div>
  );
}

export default App;
