import axios from "axios";

const newAPI = axios.create({
  baseURL: "http://localhost:8000/",
});

export default newAPI;
