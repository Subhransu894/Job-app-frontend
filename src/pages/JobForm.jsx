import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const JobForm = ()=>{
    const navigate = useNavigate()
    const [form,setForm]=useState({
        title:"",
        companyName:"",
        location:"",
        salary:"",
        jobType:"",
        description:"",
        qualifications:"",
    })
    const [error,setError]=useState("")
    //handle input change
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        setError("")
    }
    //handle form submission
    const handleSubmit = async(e) =>{
        e.preventDefault();

        //validation
        const {title,companyName,location,salary,jobType,description,qualifications}=form;
        if(!title || !companyName || !location || !salary || !jobType || !description || !qualifications){
            setError("All fields are required")
            return;
        }
        //convert qualification to array with comma(,) separate
        const jobData = {...form, salary:Number(salary),qualifications: qualifications.split(",").map(q=>q.trim())}

        try {
            const res = await fetch("https://job-app-backend-alpha.vercel.app/jobs",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(jobData),
            })
            if(!res.ok){
                const errorData = await res.json()
                throw new Error(errorData.message || "Failed to post a job")
            }
            //successfully post a job
            navigate("/") //redirect to home
        } catch (error) {
            console.error(error)
            setError("Failed to post Job")
        }
    }
    return(
        <>
        <Navbar />
        <div className="container mt-4">
            <h3 className="mb-4">Post a Job</h3>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Job Title</label>
                    <input type="text" className="form-control"
                        name="title" value={form.title} onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input type="text" className="form-control"
                        name="companyName" value={form.companyName} onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Job Location</label>
                    <input type="text" className="form-control"
                        name="location" value={form.location} onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Salary</label>
                    <input type="number" className="form-control"
                        name="salary" value={form.salary} onChange={handleChange}
                    />
                </div>
                 <div className="mb-3">
                    <label className="form-label">Job Type</label>
                    <select name="jobType" className="form-select" value={form.jobType} onChange={handleChange}>
                        <option value="">Select JobType</option>
                        <option value="Full-time (On-site)">Full-time (On-site)</option>
                        <option value="Full-time (Remote)">Full-time (Remote)</option>
                        <option value="Part-time (On-site)">Part-time (On-site)</option>
                        <option value="Part-time (Remote)">Part-time (Remote)</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Job Description</label>
                    <textarea type="text" className="form-control"
                        name="description" value={form.description} onChange={handleChange} rows={3}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Job Qualification</label>
                    <textarea type="text" className="form-control"
                        name="qualifications" value={form.qualifications} onChange={handleChange} rows={3}
                        placeholder="e.g. HTML,CSS,REACT"
                    />
                </div>
                <button className="btn btn-primary btn-sm">Post Job</button>
            </form>
        </div>
        </>
    )
}
export default JobForm;