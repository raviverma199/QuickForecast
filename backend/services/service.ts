import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY as string;
const API_BASE_URL = process.env.API_URL as string;
const API_URL_AQI = process.env.API_URL_AQI as string;

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

//  AQI INTERFACE
interface AQIDataItem {
  main: {
    aqi: number;
  };
  components: {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
  };
}

interface AQIResponse {
  list: AQIDataItem[];
}

const GetCityName = async (lat: number, lon: number) => {
  try {
    let URL = `${API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    let GetData = await axios.get<GetCityResponse>(URL);

    let Response: GetCityResponse = GetData.data;

    const CityURL = `${API_BASE_URL}?q=${Response?.name}&appid=${API_KEY}&units=metric`;

    let GetWeatherData = await axios.get<GetWeatherReport>(CityURL);

    let weatherReport: GetWeatherReport = GetWeatherData.data;

    const response = await axios.get(
      `${API_URL_AQI}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    const aqi = response.data.list[0].main.aqi;

    return { Response, weatherReport, aqi };
  } catch (error) {
    console.log(error);
  }
};

const GetWeatherReportCityWise = async (city: string) => {
  try {
    let URL: string = `${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    let Response = await axios.get(URL);

    let WeatherData = Response.data;

    const lat: number = WeatherData.coord.lat;
    const lon: number = WeatherData.coord.lon;

    const aqiUrl = `${API_URL_AQI}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const aqiResponse = await axios.get(aqiUrl);
    const aqiData = aqiResponse.data;

    const aqi = aqiData.list[0].main.aqi;

    return { WeatherData, aqi };
  } catch (error) {
    console.log(error);
  }
};

const GetAQIData = async (lat: number, lon: number) => {
  try {
    let BASE_URL = `${API_URL_AQI}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    let AQIResponse = await axios.get<AQIResponse>(BASE_URL);

    let AQIData: AQIResponse = AQIResponse.data;

    return AQIData;
  } catch (error) {
    console.log(error);
  }
};

export default { GetCityName, GetWeatherReportCityWise, GetAQIData };
