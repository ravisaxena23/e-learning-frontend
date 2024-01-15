import axios from "axios";

const BASE_URL = "http://localhost:8081";

// Axios instance with common configuration
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // You can add other common headers here
  },
});

// Generic function for making requests
const makeRequest = async (method, url, data = null) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};

// GET request
const get = async (url) => {
  return makeRequest("get", url);
};

// POST request
const post = async (url, data) => {
  return makeRequest("post", url, data);
};

// PUT request
const put = async (url, data) => {
  return makeRequest("put", url, data);
};

export { get, post, put };
