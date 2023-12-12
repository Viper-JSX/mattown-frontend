import axios from "axios";

const axiosClient = axios.create({ baseURL: "http://localhost:1337/api/", headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…DAxfQ.lA2KMhqlSAZoKteDuVHiLsTThDAhMyRNVgxpZl-ELHA" } });

export default axiosClient;