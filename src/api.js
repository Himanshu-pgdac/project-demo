import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add request interceptor for JWT token (if logged in)
API.interceptors.request.use((req) => {
  if (localStorage.getItem("authToken")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("authToken")}`;
  }
  return req;
});

export default API;