import axios from "axios";

const axiosClient = axios.create({ baseURL: "http://localhost:1337/api/", headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc4NWIxZjYyZWQyMDgyYzgxM2QyNDAiLCJlbWFpbCI6Inl1cmFAZ21haWwuY29tIiwiaWF0IjoxNzAzMTMzNDkxLCJleHAiOjE3MDMxMzcwOTF9.k4GAjsf4yBXIRM3A621cWe76Mx-Giv3tHxIMLAaauEE" } });

export default axiosClient;