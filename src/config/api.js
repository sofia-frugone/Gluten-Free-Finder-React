import axios from "axios";

const glutenFreeFinderApi = axios.create({
  baseURL: process.env.REACT_APP_GLUTEN_FREE_FINDER_API,
});

export default glutenFreeFinderApi;