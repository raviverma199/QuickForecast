import axios from "axios";

const API_CALL_BASE = "http://localhost:2020";

const axiosInstance = axios.create({
  baseURL: API_CALL_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

const apicall = async (method, url, data = null, headers = {}) => {
    try {
      const response = await axiosInstance({
        method,
        url,
        data,
        headers,
      });
  
      return response.data;
    } catch (error) {
      console.error(
        "API call error:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

export default apicall;
