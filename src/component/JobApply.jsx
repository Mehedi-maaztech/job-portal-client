import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const JobApply = () => {
    const id = useParams();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleJobApply = (e) => {
        e.preventDefault();

        const form = e.target;
        const portfolioLink = form.portfolio.value;
        const githubLink = form.github.value;
        const resumeLink = form.resume.value;
        
        const applicationData = {
            jobId: id.id,
            applicantEmail: user?.email,
            portfolioLink,
            githubLink,
            resumeLink
        };

        axios.post('http://localhost:5000/job-application', applicationData)
            .then(response => {
                console.log('Application submitted successfully:', response.data);
                toast('Application submitted successfully');
                form.reset();
                navigate('/myApplications/' + user?.email);
            }            )
            .catch(error => {
                console.error('Error submitting application:', error);
                alert('Error submitting application');
            });
    }
    return (
        <div className="hero min-h-screen max-w-7xl mx-auto p-4 md:p-8">
            <div className="hero-content w-full justify-center items-center">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form className="fieldset" onSubmit={handleJobApply}>
                            <label className="label">Portfolio Link</label>
                            <input type="url" name='portfolio' className="input w-full" placeholder="portfolio" />
                            <label className="label">Github Link</label>
                            <input type="url" name='github' className="input w-full" placeholder="github" />
                            <label className="label">Resume Link</label>
                            <input type="url" name='resume' className="input w-full" placeholder="resume" />
                            <button className="btn btn-neutral mt-4">Apply</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApply;