import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY as string;

// Interface for API Response

interface GetCityResponse {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };

  name: string;
}

interface GetWeatherReport {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: { speed: number };
  name: string;
  cod: number;
}

const GetCityName = async (lat: number, lon: number) => {
  try {
    let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    let GetData = await axios.get<GetCityResponse>(URL);

    let Response: GetCityResponse = GetData.data;

    const CityURL = `https://api.openweathermap.org/data/2.5/weather?q=${Response?.name}&appid=${API_KEY}&units=metric`;

    let GetWeatherData = await axios.get<GetWeatherReport>(CityURL);

    let weatherReport: GetWeatherReport = GetWeatherData.data;

    return { Response, weatherReport };
  } catch (error) {
    console.log(error);
  }
};

const GetWeatherReportCityWise = async (city: string) => {
  try {
    let URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    let Response = await axios.get(URL);

    let WeatherData = Response.data;

    return WeatherData;
  } catch (error) {
    console.log(error);
  }
};

export default { GetCityName, GetWeatherReportCityWise };
