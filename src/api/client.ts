import axios from "axios";
import { BASE_URL } from "./constants";

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

client.interceptors.request.use((req) => {
  return req;
});

client.interceptors.response.use((res) => {
  return res;
});

export default client;
