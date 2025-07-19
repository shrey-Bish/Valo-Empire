import axios from "axios";

export const axiosInstance = axios.create({
  baseURL : "https://valoempire.herokuapp.com/api"
})
