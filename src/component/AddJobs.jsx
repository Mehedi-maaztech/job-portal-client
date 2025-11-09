import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const AddJobs = () => {
    const {user} = useContext(AuthContext);
    const labelClasses = "block text-sm font-medium mb-1 text-gray-700";
    const inputClasses = "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
    const selectClasses = "w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500";
    const textareaClasses = "w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500";
    const sectionTitleClasses = "text-2xl text-primary-content mt-6 mb-4";
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        const form = new FormData(e.target);
        // const jobData = {
        //     title: form.get('title'),
        //     location: form.get('location'),
        //     applicationDeadline: form.get('applicationDeadline'),
        //     jobType: form.get('jobType'),
        //     category: form.get('category'),
        //     salary: {
        //         min: form.get('min'),
        //         max: form.get('max'),
        //         currency: form.get('currency')  
        //     },
        //     description: form.get('description'),
        //     requirements: form.get('requirements').split('\n').map(req => req.trim()).filter(req => req),
        //     responsibilities: form.get('responsibilities').split('\n').map(res => res.trim()).filter(res => res),
        //     company: form.get('company'),
        //     hr_name: form.get('hr_name'),
        //     hr_email: form.get('hr_email'),
        //     company_logo: form.get('company_logo'),
        //     status: form.get('status')
        // };

        const jobData = Object.fromEntries(form.entries());
        jobData.requirements = jobData.requirements.split('\n').map(req => req.trim()).filter(req => req);
        jobData.responsibilities = jobData.responsibilities.split('\n').map(res => res.trim()).filter(res => res);

        console.log('Job Data Submitted:', jobData);
        // You can send jobData to your backend server here
        axios.post('http://localhost:5000/jobs', jobData)
            .then(response => {
                console.log('Job added successfully:', response.data);
                toast('Job added successfully');
                e.target.reset();
            })
            .catch(error => {
                console.error('Error adding job:', error);
                toast('Error adding job');
            });

    };
    return (
        <div className="hero min-h-screen max-w-7xl mx-auto p-4 md:p-8">
            <div className="hero-content w-full justify-center items-center">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form className="space-y-4" onSubmit={handleSubmit}>

                            {/* Basic Job Details */}
                            <div className={sectionTitleClasses}>Job Information</div>

                            <div>
                                <label className={labelClasses} htmlFor="title">Job Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    className={inputClasses}
                                    placeholder="e.g., Software Engineer"
                                    name="title"
                                    required
                                />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClasses} htmlFor="location">Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        className={inputClasses}
                                        placeholder="e.g., Halishohor, Chittagong"
                                        name="location"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className={labelClasses} htmlFor="applicationDeadline">Application Deadline</label>
                                    <input
                                        type="date"
                                        id="applicationDeadline"
                                        className={inputClasses}
                                        name="applicationDeadline"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClasses} htmlFor="jobType">Job Type</label>
                                    <select
                                        id="jobType"
                                        className={selectClasses}
                                        name="jobType"
                                        required
                                    >
                                        <option value="" disabled>Pick a type</option>
                                        <option value="On Site">On Site</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                </div>

                                <div>
                                    <label className={labelClasses} htmlFor="category">Category</label>
                                    <select
                                        id="category"
                                        className={selectClasses}
                                        name="category"
                                        required
                                    >
                                        <option value="" disabled>Pick a category</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Software Development">Software Development</option>
                                        <option value="Design">Design</option>
                                        <option value="Business">Business</option>
                                        <option value="Teaching">Teaching</option>
                                        <option value="Design">Design</option>
                                    </select>
                                </div>
                            </div>

                            {/* Salary Range */}
                            <div className={sectionTitleClasses}>Salary Details</div>

                            <p className="text-sm text-gray-600">Salary Range (Minimum, Maximum, and Currency)</p>
                            <div className="flex gap-4">
                                <div className="w-full">
                                    <input
                                        type="number"
                                        className={inputClasses}
                                        placeholder="Min Salary"
                                        name="min"
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="number"
                                        className={inputClasses}
                                        placeholder="Max Salary"
                                        name="max"
                                        required
                                    />
                                </div>
                                <div className="w-1/3">
                                    <select
                                        className={selectClasses}
                                        name="currency"
                                        required
                                    >
                                        <option value="" disabled>Pick</option>
                                        <option value="BDT">BDT</option>
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                    </select>
                                </div>
                            </div>

                            {/* Description, Requirements, Responsibilities */}
                            <div className={sectionTitleClasses}>Role & Company</div>

                            <div>
                                <label className={labelClasses} htmlFor="description">Job Description</label>
                                <textarea
                                    id="description"
                                    className={textareaClasses}
                                    placeholder="Provide a detailed job description."
                                    name="description"
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <label className={labelClasses} htmlFor="requirements">Requirements (One skill/requirement per line)</label>
                                <textarea
                                    id="requirements"
                                    className={textareaClasses}
                                    placeholder="Write requirments in a new line&#10;e.g., JavaScript&#10;React&#10;Node.js"
                                    name="requirements"
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <label className={labelClasses} htmlFor="responsibilities">Responsibilities (One responsibility per line)</label>
                                <textarea
                                    id="responsibilities"
                                    className={textareaClasses}
                                    placeholder="e.g., Develop and maintain software&#10;Collaborate with the team"
                                    name="responsibilities"
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <label className={labelClasses} htmlFor="company">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    className={inputClasses}
                                    placeholder="e.g., Favorite IT"
                                    name="company"
                                    required
                                />
                            </div>

                            {/* HR & Status Details */}
                            <div className={sectionTitleClasses}>HR Contact & Status</div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClasses} htmlFor="hr_name">HR Contact Name</label>
                                    <input
                                        type="text"
                                        id="hr_name"
                                        className={inputClasses}
                                        placeholder="e.g., Farhan Rahman"
                                        name="hr_name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className={labelClasses} htmlFor="hr_email">HR Contact Email</label>
                                    <input
                                        type="email" // Corrected type from 'date' to 'email'
                                        id="hr_email"
                                        className={inputClasses}
                                        placeholder="e.g., hr@techsolutions.com"
                                        name="hr_email"
                                        defaultValue={user.email}
                                        readOnly
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClasses} htmlFor="company_logo">Company Logo URL</label>
                                    <input
                                        type="url" // Corrected type from 'date' to 'url'
                                        id="company_logo"
                                        className={inputClasses}
                                        placeholder="https://i.ibb.co/logo.png"
                                        name="company_logo"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className={labelClasses} htmlFor="status">Job Status</label>
                                    <select
                                        id="status"
                                        className={selectClasses}
                                        name="status"
                                        required
                                    >
                                        <option value="" disabled>Pick a status</option>
                                        <option value="active">Active</option>
                                        <option value="closed">Closed</option>
                                        <option value="pending">Pending</option>
                                    </select>
                                </div>
                            </div>


                            <button
                                type="submit"
                                className="w-full btn bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md mt-8"
                            >
                                Update Job Listing
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;