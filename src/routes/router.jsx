import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../layouts/HomeLayouts';
import Home from '../component/Home';
import Register from '../component/Register';
import SignInUser from '../component/SignInUser';
import AuthLayout from '../layouts/AuthLayout';
import JobDetails from '../component/JobDetails';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        errorElement: <div>This is error page</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            }

        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/signin',
                element: <SignInUser></SignInUser>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    }
])
export default router;