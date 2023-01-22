import axios from "axios";

// eslint-disable-next-line no-undef
const BASE_URL =
  process.env.BACKEND_BASE_URL || "https://bookings-1ysw.onrender.com/";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${localStorage.getItem("token")}`,
  },
  withCredentials: true,
});
