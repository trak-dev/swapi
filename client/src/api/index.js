import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchCathegory = (cathegory) => API.get(`/${cathegory}`);
export const fetchUrls = (cathegory) => API.get(`/${cathegory[0]}`);
