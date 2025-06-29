### 🌤️ QuickForecast
QuickForecast is a full-stack weather application that delivers real-time weather updates using the OpenWeatherMap API. Built with Node.js, TypeScript, and a modern frontend, it allows users to search for any city worldwide and instantly view detailed weather data — all within a clean, responsive interface.


### 📋 Features

- 🌍 Global Weather Search – Get accurate weather data for any location worldwide
- 🌡️ Detailed Conditions – View temperature, humidity, wind speed, and weather status
- 🔄 Real-Time Updates – Stay informed with the latest weather data
- 🎨 Intuitive Design – Clean and responsive UI for a seamless experience
- ⚙️ Server-Side API Integration – Powered by a TypeScript backend using OpenWeatherMap

### 🧰 Tech Stack

- React.js - Frotend
- Node.js – Backend runtime
- Express.js – REST API framework
- TypeScript – Strongly typed backend for better scalability
- Axios – For calling the OpenWeatherMap API
- dotenv – Secure environment variable handling

### ⚙️ How It Works

- User enters a city name in the search bar
- The frontend sends the request to the backend (/weather?city=London)
- Backend fetches real-time weather data from OpenWeatherMap API
- Weather info is sent back to the frontend and displayed instantly

### 🌐 API Integration
- QuickForecast uses the OpenWeatherMap REST API to fetch live weather data for any location. It extracts key fields such as temperature, condition, humidity, and wind speed.
