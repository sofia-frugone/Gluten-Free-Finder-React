import axios from "axios";

const GlutenFreeFinderApi = axios.create({
  baseURL: process.env.REACT_APP_GLUTEN_FREE_FINDER_API,
});

export default GlutenFreeFinderApi;
