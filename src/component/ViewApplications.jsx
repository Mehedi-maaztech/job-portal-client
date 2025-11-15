import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router';

const ViewApplications = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (event, id) => {
        const newStatus = event.target.value;
        console.log("Selected Status:", newStatus, id);
        // Here you can add logic to update the status in your backend or state
        const data = { status: newStatus };
        axios.patch(`https://job-portal-server-olive-mu.vercel.app/job-application/${id}`, data)
            .then(response => {
                console.log("Status updated successfully:", response.data);
                // Optionally, you can refresh the data or update the state here
            })
            .catch(error => {
                console.error("Error updating status:", error);
            });
    };
    return (
        <div>
            <h2 className="text-2xl">Applications for this job {applications.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                applications.map((application, index) => (
                                    <tr key={application._id}>
                                        <th>{index + 1}</th>
                                        <td>{application.applicantEmail}</td>
                                        <td>{application.jobTitle}</td>
                                        <td>
                                            <select 
                                                onChange={(event) => handleStatusUpdate(event, application._id)}
                                                defaultValue={application.status || "Change Status"} className="select">
                                                <option disabled={true}>Change Status</option>
                                                <option>On Review</option>
                                                <option>Set Interview</option>
                                                <option>Hired</option>
                                                <option>Rejected</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewApplications;