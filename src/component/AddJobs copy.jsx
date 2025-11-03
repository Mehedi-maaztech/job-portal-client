
const AddJobs = () => {
    return (
        <div className="hero min-h-screen max-w-7xl mx-auto p-4 md:p-8">
            <div className="hero-content w-full justify-center items-center">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form className="fieldset">
                            <label className="label">Title</label>
                            <input type="text" className="input w-full" placeholder="" name="title" />

                            <label className="label">Location</label>
                            <input type="text" className="input w-full" placeholder="" name="location" />

                            <label className="label">JOb Type</label>
                            <select defaultValue="Pick a type" className="select w-full" name="jobType">
                                <option disabled={true}>Pick a type</option>
                                <option>On Site</option>
                                <option>Remote</option>
                                <option>Hybrid</option>
                            </select>

                            <label className="label">Category</label>
                            <select defaultValue="Pick a category" className="select w-full" name="jobType">
                                <option disabled={true}>Pick a category</option>
                                <option>Engineering</option>
                                <option>Business</option>
                                <option>Teaching</option>
                            </select>

                            <p>Salary Range</p>
                            <div className="flex gap-2">
                                <div className="w-full">
                                    <input type="text" className="input w-full" placeholder="Min Salary" name="min" />
                                </div>
                                <div className="w-full">
                                    <input type="text" className="input w-full" placeholder="Max Salary" name="max" />
                                </div>
                                <div className="w-full">
                                    <select defaultValue="Pick a Currency" className="select w-full" name="currency">
                                        <option disabled={true}>Pick a currency</option>
                                        <option>BDT</option>
                                        <option>US</option>
                                    </select>
                                </div>
                            </div>

                            <label className="label">Job Description</label>
                            <textarea className="textarea w-full" placeholder="" name="description"></textarea>

                            <label className="label">Company Name</label>
                            <input type="text" className="input w-full" placeholder="" name="companyname" />

                            <label className="label">requirements</label>
                            <textarea className="textarea w-full" placeholder="put each requirment in a new line" name="requirements"></textarea>

                            <label className="label">Responsibilities</label>
                            <input type="text" className="input w-full" placeholder="" name="responsibility" />

                            <label className="label">Status</label>
                            <select defaultValue="Pick a status" className="select w-full" name="status">
                                <option disabled={true}>Pick a status</option>
                                <option>Active</option>
                                <option>Closed</option>
                            </select>

                            <label className="label">HR Name</label>
                            <input type="date" className="input w-full" placeholder="" name="hrname" />

                            <label className="label">HR Emial</label>
                            <input type="date" className="input w-full" placeholder="" name="hremail" />

                            <label className="label">Company logo</label>
                            <input type="date" className="input w-full" placeholder="" name="hremail" />

                            <label className="label">Application Deadline</label>
                            <input type="date" className="input w-full" placeholder="" name="deadline" />
                            {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                            <button className="btn btn-outline btn-primary mt-4">Add Job</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;