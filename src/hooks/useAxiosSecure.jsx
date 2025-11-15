import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const axiosInstane = axios.create({
    baseURL: 'https://job-portal-server-olive-mu.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {

    const { logoutUser } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosInstane.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log("Error caught in interceptor", error);

            if (error.status === 401 || error.status === 403) {
                console.log("need to logout the user");
                logoutUser()
                    .then(() => {
                        console.log('logged out user');
                        navigate('/auth/signin');
                    })
                    .catch(error => console.log(error))
            }
            return Promise.reject(error);
        })
    }, [logoutUser, navigate])
    
    return axiosInstane;
};

export default useAxiosSecure;