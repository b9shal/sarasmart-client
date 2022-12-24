import axios from "axios";

export const baseURL = import.meta.env.VITE_SERVER_BASE_URL;

export const httpClient = axios.create({
  baseURL,
});
