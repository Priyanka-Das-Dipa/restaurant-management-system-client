import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://restaurant-management-system-server-eight.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
