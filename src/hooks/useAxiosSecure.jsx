import axios from 'axios';
import React from 'react';

const axiosInstane = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
const useAxiosSecure = () => {
    return axiosInstane;
};

export default useAxiosSecure;