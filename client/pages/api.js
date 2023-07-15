import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getServerData = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching server data:", error);
    return null;
  }
};
