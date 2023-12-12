import axios from "axios";

const axiosClient = axios.create({ baseURL: "http://localhost:1337/api/", headers: {} });

export default axiosClient;