import axios from 'axios';

export const axiosWithAuth =() => {
    return axios.create({
        baseURL: " https://fakestoreapi.com",
        headers: {
            Authorization:localStorage.getItem('token')
        }
    });
}; 

export default axios