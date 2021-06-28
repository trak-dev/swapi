import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchCathegory = (cathegory) => API.get(`/${cathegory}`);
export const fetchMoreCathegory = (cathegory, search) =>
  API.get(`/${cathegory}/${search}`);
