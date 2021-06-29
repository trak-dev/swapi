import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
//appel des données de l'api via backend
export const fetchCathegory = (cathegory) => API.get(`/${cathegory}`);
