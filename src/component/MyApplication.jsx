// import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../provider/AuthProvider';

const MyApplication = () => {
    // const myapplications = useLoaderData();
    // const [newApplications, setNewApplications] = useState(myapplications);
    // console.log(myapplications);

    /**
     * if we load data with axios instead of loader data we have to send creadentail as { withCredentails : true}
     * 
     * in fetch it we have to send credentail in this format {credentials: 'include'}
     *  
     * */
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [newApplications, setNewApplications] = useState([]);
    useEffect(()=> {
        if (!user?.email) return;

        axiosSecure.get(`/job-application?email=${user.email}`)
            .then(res => setNewApplications(res.data))

        // axiosSecure.get(`/job-application?email=lotki@gmail.com`)
        //     .then(res => setNewApplications(res.data))
    }, [axiosSecure, user.email])

    const handleDelete = (_id) => {

        console.log('Delete application with id:', _id);
        axiosSecure.delete(`/job-application/${_id}`)
            .then(response => {
                console.log(response.data);
                if (response.data.deletedCount > 0) {
                    toast('Application deleted successfully');
                    const remaining = newApplications.filter(app => app._id !== _id)
                    setNewApplications(remaining);
                }
            })
            .catch(error => {
                console.error('There was an error deleting the application!', error);
            });
    }
    return (
        <div className='min-h-[70vh] p-5'>
            <h1>Number of Application {newApplications.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Job</th>
                            <th>Company</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            newApplications.map((application, index) =>
                                <tr key={application._id}>
                                    <th>{index + 1}</th>
                                    <td className='flex items-center gap-2'>
                                        <div>
                                            <img src={application.companyLogo} alt="Avatar Tailwind CSS Component" className="w-12 h-12 rounded-full" />
                                        </div>
                                        <div>
                                            <div className="font-bold">{application.jobTitle}</div>
                                            <div className="text-sm opacity-50">{application.applicantEmail}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div><span>{application.jobCompany}</span></div>
                                    </td>
                                    <td>
                                        <button className='btn btn-outline' onClick={() => handleDelete(application._id)}>X</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplication;