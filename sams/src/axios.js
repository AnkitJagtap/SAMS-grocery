import axios from "axios";

const instance = axios.create({
  baseURL: "...", // THE API (clould  function) URL
});

export default instance;