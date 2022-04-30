import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-sams-grocery-3aa2f.cloudfunctions.net/api", // THE API (clould  function) URL
  // baseURL: '...' // at this point we don't have an API, we've done no cloud-function work, noting like that. THE API (cloud function) URL
  // baseURL: 'http://localhost:5001/sams-grocery-3aa2f/us-central1/api'  // it is /api because we have
  // exports.api = functions.https.onRequest(app); in functions index.js
});

export default instance;
