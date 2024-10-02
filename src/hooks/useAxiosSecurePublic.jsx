import axios from "axios";

const axiosSecurePublic = axios.create({
    baseURL: "http://localhost:5000"
});

const useAxiosSecurePublic = () => {
    return axiosSecurePublic;
};

export default useAxiosSecurePublic;