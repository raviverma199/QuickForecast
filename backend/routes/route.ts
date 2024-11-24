import express, { Request, Response, NextFunction } from "express";
const route = express.Router();
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import controller from "../controller/controller";
const API_KEY = process.env.API_KEY as string;

const API_URL_AQI = process.env.API_URL_AQI as string;

route.post("/api/weather", controller.GetCityName);

route.post("/api/SearchWeatherCityWise", controller.CityWiseData);

export default route;
