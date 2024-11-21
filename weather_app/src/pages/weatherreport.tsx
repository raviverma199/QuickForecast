import React from "react";
import "../component/style/weatherreport.css";

const WeatherReport = () => {
  return (
    <div className="weather-container">
      <div className="weather-content">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a city..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>

        {/* Weather Overview */}
        <div className="overview">
          <h1 className="city-name">New York</h1>
          <div className="weather-info">
            <div className="weather-icon">
              <img
                src="https://openweathermap.org/img/wn/04d.png"
                alt="weather-icon"
              />
            </div>
            <div className="weather-details">
              <p className="temperature">24°C</p>
              <p className="description">Partly Cloudy</p>
              <p className="humidity">Humidity: 70%</p>
              <p className="wind-speed">Wind: 12 km/h</p>
            </div>
          </div>
        </div>

        {/* Weekly Data Section */}
        <div className="weekly-data">
          <h2 className="weekly-heading">7-Day Forecast</h2>
          <div className="data-grid">
            <div className="data-item">
              <p className="date">Today</p>
              <p className="temp">24°C</p>
              <p className="desc">Partly Cloudy</p>
            </div>
            <div className="data-item">
              <p className="date">Tomorrow</p>
              <p className="temp">26°C</p>
              <p className="desc">Sunny</p>
            </div>
            <div className="data-item">
              <p className="date">Wed</p>
              <p className="temp">22°C</p>
              <p className="desc">Rainy</p>
            </div>
            <div className="data-item">
              <p className="date">Thu</p>
              <p className="temp">21°C</p>
              <p className="desc">Cloudy</p>
            </div>
            <div className="data-item">
              <p className="date">Fri</p>
              <p className="temp">25°C</p>
              <p className="desc">Sunny</p>
            </div>
            <div className="data-item">
              <p className="date">Sat</p>
              <p className="temp">23°C</p>
              <p className="desc">Partly Cloudy</p>
            </div>
            <div className="data-item">
              <p className="date">Sun</p>
              <p className="temp">20°C</p>
              <p className="desc">Rainy</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>Stay safe and enjoy the weather!</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;
