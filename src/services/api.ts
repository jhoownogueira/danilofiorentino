import axios from "axios";

export const api = axios.create({
    baseURL: "https://18.231.195.221:3333",
  });