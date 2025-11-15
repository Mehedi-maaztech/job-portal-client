import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';
import useAxiosSecure from '../hooks/useAxiosSecure';

const HotJobs = () => {
    const [hotJobs, setHotJobs] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get('https://job-portal-server-olive-mu.vercel.app/jobs', {withCredentials: true})
        .then(res => setHotJobs(res.data))
        .catch(err => console.error(err));

        // fetch('https://job-portal-server-olive-mu.vercel.app/jobs',)
        //     .then(res => res.json())
        //     .then(data => setHotJobs(data))
        //     .catch(error => console.error('Error fetching hot jobs:', error));
    }, [axiosSecure]);
    // console.log(hotJobs);
    return (
        <div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
                {
                    hotJobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;