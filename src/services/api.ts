import axios from "axios";

export const api = axios.create({
    baseURL: "https://sendgrid-danilofiorentino.herokuapp.com/",
  });