import service from "../services/service";
import { Request, Response, NextFunction } from "express";

const GetCityName = async (req: Request, res: Response) => {
  try {
    let { lat, lon } = req.body;

    const CityData = await service.GetCityName(lat, lon);

    res
      .status(200)
      .json({
        success: true,
        response: CityData?.Response.name,
        WeatherReport: CityData?.weatherReport,
      });
  } catch (error) {
    console.log(error);
  }
};

const CityWiseData = async (req: Request, res: Response) => {
  try {
    let city = req.body.city;

    let WeatherData = await service.GetWeatherReportCityWise(city);

    console.log(WeatherData.response);
    
    res.status(200).json({ success: true, response: WeatherData });
  } catch (error) {
    console.log(error);
  }
};

export default { GetCityName, CityWiseData };
