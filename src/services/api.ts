import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-danilo-fiorentino.herokuapp.com",
  });