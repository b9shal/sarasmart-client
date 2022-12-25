import axios from "axios";

export const baseURL = import.meta.env.VITE_SERVER_BASE_URL;

export const httpClient = axios.create({
  baseURL,
});

const fetchApiClient = httpClient;

function get(url) {
  return fetchApiClient.get(url);
}

function post(url, data) {
  return fetchApiClient.post(url, data);
}

function _delete(url) {
  return fetchApiClient.delete(url);
}

function patch(url, data) {
  return fetchApiClient.patch(url, data);
}
