import axios from "axios";
import { backUrl, TIMEOUT } from "./settings";

const api = axios.create({
  baseURL: backUrl,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default api;
