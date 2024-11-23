import React, { useState } from "react";
import "../component/style/weatherreport.css";
import { useEffect } from "react";
import Apicall from "../services/apicall";

const WeatherReport = () => {
  const [CityName, SetCityName] = useState("");
  const [WeatherData, SetWeatherData] = useState({
    temperature: null,
    description: "",
    humidity: null,
    windspeed: null,
    Image: null,
  });
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    if (!city) {
      alert("Please enter a city name!");
      return;
    }

    let City = await Apicall("POST", "/api/SearchWeatherCityWise", {
      city: city,
    });

    if (City.success) {
      SetCityName(City.response.name);
      SetWeatherData({
        temperature: City.response.main.temp,
        description: City.response.weather[0].description,
        humidity: City.response.main.humidity,
        windspeed: City.response.wind.speed,
        icon: City.response.weather[0].icon,
      });
    } else {
      alert("City Not Found");
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          let SendCoord = await Apicall("POST", "/api/weather", {
            lat: latitude,
            lon: longitude,
          });

          SetCityName(SendCoord.response);
          SetWeatherData({
            temperature: SendCoord.WeatherReport.main.temp,
            description: SendCoord.WeatherReport.weather[0].description,
            humidity: SendCoord.WeatherReport.main.humidity,
            windspeed: SendCoord.WeatherReport.wind.speed,
            icon: SendCoord.WeatherReport.weather[0].icon,
          });
        },
        (err) => {
          console.error(err.message);
        }
      );
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="weather-container">
      <div className="weather-content">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a city..."
            className="search-input"
            value={city}
            onChange={handleInputChange}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Weather Overview */}
        <div className="overview">
          <h1 className="city-name">{CityName || "...loading"}</h1>
          <div className="weather-info">
            <div className="weather-icon">
              <img
                src={`https://openweathermap.org/img/wn/${WeatherData.icon}.png`}
                alt="weather-icon"
              />
            </div>
            <div className="weather-details">
              <p className="temperature">
                {WeatherData.temperature
                  ? `${WeatherData.temperature}`
                  : "Loading..."}
                °C
              </p>
              <p className="description">
                {WeatherData.description || "Loading..."}
              </p>
              <p className="humidity">
                {WeatherData.humidity
                  ? `Humidity: ${WeatherData.humidity}%`
                  : "Loading..."}
              </p>
              <p className="windspeed">
                {WeatherData.windspeed
                  ? `Wind: ${WeatherData.windspeed} km/h`
                  : "Loading..."}
              </p>
            </div>
          </div>
        </div>

        <div className="data-item1">
          <div className="aqi-card">
            <div className="aqi-info">
              <h4>AQI: 75</h4>
              <div
                className="aqi-status"
                style={{ backgroundColor: "#4CAF50" }}
              >
                Good
              </div>
              <p>
                Air quality is considered satisfactory and poses little or no
                risk.
              </p>
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
