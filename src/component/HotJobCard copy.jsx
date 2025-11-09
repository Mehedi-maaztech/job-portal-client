import { Link } from 'react-router';

const HotJobCard = ({ job }) => {

    const { _id, company, company_logo, location, title, jobType, postedDate, description, requirements, salary } = job;
    return (
        <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
            <div className="card-body p-4 sm:p-5">

                {/* Company Info & Location Section (Top) */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-3">
                    {/* Company Logo and Info */}
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 shrink-0">
                            <img
                                src={company_logo}
                                alt={`${company} logo`}
                                className="w-full h-full object-contain rounded-lg"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/48?text=IT";
                                }}
                            />
                        </div>
                        <div>
                            <h2 className="card-title text-base sm:text-lg font-semibold text-gray-800">
                                {company}
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-500 flex items-center mt-0.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-1 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m10.121-7.07l-4.243 4.243m0 0l-4.243-4.243m4.243 4.243V4"
                                    />
                                </svg>
                                {location}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Job Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>

                {/* Job Metadata */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                    <p className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 13.255A23.518 23.518 0 0112 15c-3.18 0-6.236-.613-9-1.745M16 16v.01M6 16v.01"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 11a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                        {jobType}
                    </p>

                    <p className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        {postedDate}
                    </p>
                </div>

                {/* Job Description */}
                <p className="text-gray-700 mb-4 text-sm sm:text-base line-clamp-3">
                    {description}
                </p>

                {/* Requirements */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {requirements.slice(0, 3).map((req, index) => (
                        <div
                            key={index}
                            className="badge text-gray-700 font-medium px-3 py-1 text-xs sm:text-sm"
                        >
                            {req}
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-gray-100">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">
                        ${salary}
                        <span className="text-sm sm:text-base font-normal text-gray-500 ml-1">/Month</span>
                    </div>

                    <Link to={`/jobs/${_id}`}>
                        <button className="btn bg-amber-600 text-white hover:bg-primary-focus w-full sm:w-auto">
                            Apply Now
                        </button>
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default HotJobCard;