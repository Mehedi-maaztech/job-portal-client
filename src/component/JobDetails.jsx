import { useState } from 'react';
import { MapPin, DollarSign, Clock, Calendar, Briefcase, Zap, User, Mail } from 'lucide-react';
import { Link, useLoaderData } from 'react-router';

const formatSalary = (min, max, currency) => {
    const formatter = new Intl.NumberFormat('en-US');
    const minFmt = formatter.format(min);
    const maxFmt = formatter.format(max);
    const currencyUpper = currency.toUpperCase();
    return `${minFmt} - ${maxFmt} ${currencyUpper} / Month`;
};

// Component for a single stat item
// eslint-disable-next-line no-unused-vars
const StatItem = ({ icon: Icon, title, value }) => (
    <div className="flex items-start p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
        <Icon className="w-6 h-6 text-gray-600 mr-4 mt-1" />
        <div>
            <div className="text-sm font-medium text-gray-500">{title}</div>
            <div className="text-lg font-semibold text-gray-800">{value}</div>
        </div>
    </div>
);

const JobDetails = () => {

    const job = useLoaderData();
    const {_id, title, company, location, company_logo, description, responsibilities, requirements, salaryRange, jobType, category, applicationDeadline, hr_email, hr_name, status } = job;

    const [isSaved, setIsSaved] = useState(false);
    const [isApplied, setIsApplied] = useState(false);
    const handleSave = () => {
        setIsSaved(!isSaved);
        // In a real app, this would make an API call to save the job
        console.log(`Job is now ${isSaved ? 'unsaved' : 'saved'}`);
    };

    const handleApply = () => {
        setIsApplied(true);
        console.log('Applied to the job');
    }

    const handleCancel = () => {
        setIsApplied(false);
        console.log('Cancelled the application');
    }
    return (
        <div className="p-4 md:p-8 min-h-screen bg-gray-50 font-sans antialiased">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl mb-8">
                    <div className="flex items-center space-x-4 mb-4">
                        <img
                            src={company_logo}
                            alt={`${company} logo`}
                            className="w-16 h-16 rounded-lg object-contain border p-1"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/4c379a/ffffff?text=IT"; }}
                        />
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                {title}
                            </h1>
                            <p className="text-gray-600 font-semibold text-xl">{company}</p>
                            <p className="text-gray-500 text-base flex items-center mt-1">
                                <MapPin className="w-4 h-4 mr-1" />
                                {location}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Employment Info Grid (Stats) */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-5 border-b pb-2">Employment Info</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <StatItem
                            icon={DollarSign}
                            title="Salary Range"
                            value={formatSalary(salaryRange.min, salaryRange.max, salaryRange.currency)}
                        />
                        <StatItem
                            icon={Clock}
                            title="Job Type"
                            value={jobType}
                        />
                        <StatItem
                            icon={Briefcase}
                            title="Category"
                            value={category}
                        />
                        <StatItem
                            icon={Calendar}
                            title="Application Deadline"
                            value={applicationDeadline}
                        />
                    </div>
                </div>

                {/* Main Content: Description, Responsibilities, Requirements */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <div className="p-6 bg-white rounded-2xl shadow-xl">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Job Description</h3>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{description}</p>
                        </div>

                        {/* Responsibilities */}
                        <div className="p-6 bg-white rounded-2xl shadow-xl">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Responsibilities</h3>
                            <ul className="list-inside space-y-2 text-gray-600">
                                {responsibilities.map((resp, index) => (
                                    <li key={index} className="flex items-start">
                                        <Zap className="w-4 h-4 text-gray-500 mr-2 mt-1 shrink-0" />
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Requirements / HR Info Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Requirements/Skills */}
                        <div className="p-6 bg-white rounded-2xl shadow-xl">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Requirements & Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {requirements.map((req, index) => (
                                    <div key={index} className="badge badge-lg text-accent-content font-medium p-3">
                                        {req}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* HR Contact Info (New Section) */}
                        <div className="p-6 bg-white rounded-2xl shadow-xl">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">HR Contact</h3>
                            <div className="space-y-3 text-gray-700">
                                <div className="flex items-center">
                                    <User className="w-5 h-5 text-indigo-500 mr-3" />
                                    <span>{hr_name}</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-indigo-500 mr-3" />
                                    <a href={`mailto:${hr_email}`} className="text-blue-500 hover:underline">{hr_email}</a>
                                </div>
                                <div className="badge badge-success text-white font-semibold mt-2">
                                    Status: {status.toUpperCase()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Action Bar / Footer */}
                <div className="bg-white p-4 shadow-2xl rounded-t-2xl fixed bottom-0 left-0 right-0 md:static md:rounded-2xl md:shadow-xl md:mt-12">
                    <div className="max-w-6xl mx-auto flex justify-between sm:justify-end gap-4">
                        <button className="btn btn-outline btn-primary w-full sm:w-auto" onClick={handleSave}>
                            {isSaved ? 'Unsave Job' : 'Save Job'}
                        </button>
                        <Link to={`/jobApply/${_id}`}>
                            <button className="btn btn-primary w-full sm:w-auto" onClick={handleApply}>
                                {/* Action Buttons */}
                                {isApplied ? 'Application Sent' : 'Apply Now'}
                            </button>
                        </Link>
                        <button className="btn btn-warning w-full sm:w-auto" onClick={handleCancel} disabled={!isApplied}>
                            Cancel Application
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;
