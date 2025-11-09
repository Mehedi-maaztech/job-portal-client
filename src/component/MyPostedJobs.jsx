import axios from 'axios';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const MyPostedJobs = () => {
    const myPostedJobs = useLoaderData();
    const [newJobs, setNewJobs] = useState(myPostedJobs);
    console.log(newJobs);

    const handleDelete = (_id) => {

        console.log('Delete application with id:', _id);
        axios.delete(`http://localhost:5000/job-application/${_id}`)
            .then(response => {
                console.log(response.data);
                if (response.data.deletedCount > 0) {
                    toast('Application deleted successfully');
                    const remaining = newJobs.filter(app => app._id !== _id)
                    setNewJobs(remaining);
                }
            })
            .catch(error => {
                console.error('There was an error deleting the application!', error);
            });
    }
    return (
        <div className="min-h-[70vh] p-5">
            <h1 className="text-xl font-semibold mb-5">
                Number of Job Posted: {newJobs.length}
            </h1>

            <div className="overflow-x-auto bg-base-100 rounded-lg shadow-sm border border-base-200">
                <table className="table w-full text-sm sm:text-base">
                    {/* Table Head */}
                    <thead className="bg-base-200 text-gray-700">
                        <tr>
                            <th className="hidden sm:table-cell">#</th>
                            <th>Job Title</th>
                            <th className="hidden lg:table-cell">Company</th>
                            <th className="hidden md:table-cell">Location</th>
                            <th className="hidden lg:table-cell">Category</th>
                            <th className="hidden sm:table-cell">Job Type</th>
                            <th className="hidden md:table-cell">Salary</th>
                            <th className="hidden lg:table-cell">Deadline</th>
                            <th className="hidden md:table-cell">Applicants</th>
                            <th className="hidden md:table-cell">View Applicants</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {newJobs.map((job, index) => (
                            <tr
                                key={job._id}
                                className="hover:bg-base-200 transition duration-200 ease-in-out"
                            >
                                {/* Index */}
                                <td className="hidden sm:table-cell font-medium">{index + 1}</td>

                                {/* Job Title + Logo */}
                                <td className="flex items-center gap-3 min-w-[200px]">
                                    <img
                                        src={job.company_logo}
                                        alt={job.title}
                                        className="w-10 h-10 rounded-full border object-cover"
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-800">{job.title}</div>
                                        <div className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                                            {job.description.slice(0, 30)}...
                                        </div>
                                    </div>
                                </td>

                                {/* Company */}
                                <td className="hidden lg:table-cell font-medium text-gray-700">
                                    {job.company}
                                </td>

                                {/* Location */}
                                <td className="hidden md:table-cell text-gray-600">
                                    {job.location}
                                </td>

                                {/* Category */}
                                <td className="hidden lg:table-cell text-gray-600">
                                    {job.category}
                                </td>

                                {/* Job Type */}
                                <td className="hidden sm:table-cell">
                                    <span className="">
                                        {job.jobType}
                                    </span>
                                </td>

                                {/* Salary */}
                                <td className="hidden md:table-cell whitespace-nowrap">
                                    {job.min.toLocaleString()} - {job.max.toLocaleString()}{" "}
                                    {job.currency.toUpperCase()}
                                </td>

                                {/* Deadline */}
                                <td className="hidden lg:table-cell text-gray-600">
                                    {job.applicationDeadline}
                                </td>

                                {/* Applicants */}
                                <td className="hidden lg:table-cell text-gray-600">
                                    {job.applicantsCount || 0}
                                </td>

                                {/* view applications */}
                                <td>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <Link to={`/viewApplications/${job._id}`}>
                                            <button
                                                className="btn btn-sm btn-outline btn-warning w-full sm:w-auto"
                                            >
                                                View Applications
                                            </button>
                                        </Link>
                                    </div>
                                </td>
                                {/* Actions */}
                                <td>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <button
                                            className="btn btn-sm btn-outline btn-error w-full sm:w-auto"
                                            onClick={() => handleDelete(job._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;