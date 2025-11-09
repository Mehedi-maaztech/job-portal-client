import { Link } from "react-router";

const HotJobCard = ({ job }) => {
    const { _id, title, company_logo, location, jobType, postedDate, description, requirements, salary } = job || {};

    return (
        <div
            className="card w-full max-w-sm bg-base-100 shadow-xl rounded-xl overflow-hidden cursor-pointer transition-all duration-400 hover:shadow-2xl hover:scale-[1.001]"
            onClick={() => console.log(`Job ID: ${_id}`)}
        >
            {/* Image Banner */}
            <figure className="relative h-48 sm:h-52 bg-base-200">
                <img
                    src={company_logo}
                    alt={title}
                    className="w-20 h-20 object-cover "
                />
                <div className="absolute top-5 left-4">
                    <div className="badge bg-green-500 text-white font-bold px-4 py-3 text-sm rounded-md border-none shadow-md">
                        {jobType}
                    </div>
                </div>
                <div className="absolute top-4 right-4">
                    {/* <div className="badge bg-green-500 text-white font-bold px-4 py-3 text-sm rounded-md border-none shadow-md">
                        {jobType}
                    </div> */}
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-success btn-soft btn-outline text-black font-semibold px-4 py-2 text-sm rounded-md border-none shadow-md hover:text-white">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </figure>

            {/* Card Body */}
            <div className="card-body p-5 space-y-3">
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>

                {/* Location and Posted Date */}
                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                    <p className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-1 text-gray-400"
                        >
                            <path d="M20 10c0 6-8 10-8 10s-8-4-8-10a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        {location}
                    </p>

                    <p className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-1 text-gray-400"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {postedDate}
                    </p>
                </div>

                {/* Tags and Salary */}
                <div className="flex items-end justify-between mt-3 pt-3">
                    <div className="flex flex-wrap gap-2 max-w-[60%]">
                        {requirements?.slice(0, 3).map((req, i) => (
                            <div
                                key={i}
                                className="badge bg-gray-200 text-gray-700 font-medium px-4 py-1 text-sm rounded-lg border-none"
                            >
                                {req}
                            </div>
                        ))}
                    </div>

                    <div className="text-xl font-bold text-blue-600 shrink-0 ml-4">
                        ${salary}
                        <span className="text-sm font-normal text-gray-500 ml-1">/Month</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mt-4 text-sm line-clamp-3">
                    {description || "No description provided."}
                </p>
            </div>
        </div>
    );
};

export default HotJobCard;
