import axios from "axios";

const BASE_URL = "/api/";
// const TOKEN =

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    // token: `Bearer ${TOKEN}`,
  },
});
