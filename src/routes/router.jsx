import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../layouts/HomeLayouts';
import Home from '../component/Home';
import Register from '../component/Register';
import SignInUser from '../component/SignInUser';
import AuthLayout from '../layouts/AuthLayout';
import JobDetails from '../component/JobDetails';
import PrivateRoute from './PrivateRoute';
import JobApply from '../component/JobApply';
import MyApplication from '../component/MyApplication';
import AddJobs from '../component/AddJobs';
import MyPostedJobs from '../component/MyPostedJobs';
import ViewApplications from '../component/ViewApplications';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/jobApply/${params.id}`)
            },
            {
                path: '/myApplications/:email',
                element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/job-application?email=${params.email}`, {credentials: 'include'})
            },
            {
                path: '/addJobs',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path: '/myPostedJobs/:email',
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs?email=${params.email}`, {credentials: 'include'})
            },
            {
                path: '/viewApplications/:jobId',
                element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/job-application?jobId=${params.jobId}`)
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