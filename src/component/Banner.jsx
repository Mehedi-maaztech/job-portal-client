// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Search, MapPin, Upload, Briefcase } from 'lucide-react';
import { CiSearch } from "react-icons/ci";

const Banner = () => {
    return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-800 leading-tight"
          >
            There Are <span className="text-primary">93,178</span> Postings Here <br /> For You!
          </motion.h1>

          <p className="text-gray-500 text-lg">
            Find Jobs, Employment & Career Opportunities
          </p>

          {/* Search Box */}
          <div className="flex bg-base-100 shadow-lg rounded-2xl overflow-hidden border border-base-300">
            <div className="flex items-center gap-2 px-4 border-r border-base-300">
              <Search className="text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="input input-ghost focus:outline-none w-60"
              />
            </div>
            <div className="flex items-center gap-2 px-4 border-r border-base-300">
              <MapPin className="text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="City or postcode"
                className="input input-ghost focus:outline-none w-40"
              />
            </div>
            {/* <button className="btn btn-soft rounded-none text-lg">
                <CiSearch />
            </button> */}
          </div>

          {/* Popular searches */}
          <div className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-700">Popular Searches:</span> Designer, Developer, Web, iOS, PHP, Senior, Engineer
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center">
          <motion.img
            src="https://media.istockphoto.com/id/2218333101/photo/confident-mature-man-smiling-in-professional-attire-with-a-calm-background.jpg?s=612x612&w=0&k=20&c=USO4FSo7wO-ETzZD7hCt0DDRuf36l9EjPzrET3geMxk="
            alt="Professional Person"
            className="w-80 h-80 object-cover rounded-2xl shadow-xl"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Floating Card 1 */}
          <motion.div
            className="absolute -top-8 right-0 card bg-base-100 shadow-xl w-52 p-3 flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Briefcase className="text-yellow-600 w-5 h-5" />
            </div>
            <p className="text-sm font-medium">Work Inquiry Received</p>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            className="absolute bottom-10 -left-5 card bg-base-100 shadow-xl w-50 p-3 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-blue-100 p-2 rounded-lg">
              <Upload className="text-blue-600 w-5 h-5" />
            </div>
            <p className="text-sm font-medium">
              Upload Your CV<br />
              <span className="text-gray-500 text-xs">Takes a few seconds</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
    );
};

export default Banner;