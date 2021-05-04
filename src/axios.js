import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend223.herokuapp.com/",
});

export default instance;
