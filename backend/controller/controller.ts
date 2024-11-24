import service from "../services/service";
import { Request, Response, NextFunction } from "express";

const GetCityName = async (req: Request, res: Response) => {
  try {
    let { lat, lon } = req.body;

    const CityData = await service.GetCityName(lat, lon);

    res.status(200).json({
      success: true,
      response: CityData?.Response.name,
      WeatherReport: CityData?.weatherReport,
    });
  } catch (error) {
    console.log(error);
  }
};

const CityWiseData = async (req: Request, res: Response): Promise<void> => {
  try {
    let city = req.body.city;

    if (!city) {
      res.status(500).json({ msg: "City Not Found" });
    }

    let WeatherData = await service.GetWeatherReportCityWise(city);

    if (WeatherData) {
      res.status(200).json({ success: true, response: WeatherData });
    } else {
      res.status(200).json({ success: false });
    }
  } catch (error) {
    console.log(error);
  }
};

export default { GetCityName, CityWiseData };
