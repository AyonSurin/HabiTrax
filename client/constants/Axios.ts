import axios from "axios";

const baseURL =
  "https://b433-2406-7400-75-5bca-96d8-e368-fd85-eba3.ngrok-free.app";

export default axios.create({
  baseURL: baseURL,
});
