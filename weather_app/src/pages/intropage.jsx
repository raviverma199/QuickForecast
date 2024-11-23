import React from "react";
import "../component/style/intropage.css"; // Make sure this path is correct
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing


<style>

  
</style>


const IntroPage = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const onGetStarted = () => {
    navigate("/weatherreport"); // Navigate to weather report page
  };

  return (
    <div className="intro-container">
      <div className="intro-content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
          alt="Weather Icon"
          className="weather-icon"
        />
        <h1 className="app-title">
          Weather <span className="highlight">Forecast App</span>
        </h1>
        <p className="app-description">
          It's the newest weather app. It has a bunch of features and includes
          everything you need to stay updated.
        </p>
        <button className="get-started-btn" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default IntroPage;
