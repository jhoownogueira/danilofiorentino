import axios from "axios";

export const api = axios.create({
    baseURL: "http://18.231.195.221:3333",
  });