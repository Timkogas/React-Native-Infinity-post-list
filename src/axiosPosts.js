import axios from "axios";

const axiosPosts = axios.create({
  baseURL: "https://www.reddit.com/r/pics.json"
});

export default axiosPosts