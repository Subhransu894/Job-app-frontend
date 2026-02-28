import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState,useEffect } from "react";
const JobDetails = ()=>{
    const {id} = useParams()
    const [job,setJobs]=useState(null)

    useEffect(()=>{
        const fetchJob = async()=>{
            try {
                const res = await fetch(`https://job-app-backend-alpha.vercel.app/jobs/${id}`)
                if(!res.ok){
                    throw new Error("Failed to fetch job")
                }
                const data = await res.json()
                setJobs(data)
            } catch (error) {
                console.error(error)
            }
        };
        fetchJob();
    },[id])
    if(!job){
        return <h4 className="text-center mt-5">Loading...</h4>
    }
    return(
        <>
            <Navbar/>
            <div className="container mt-4">
                <h2 className="mb-3">{job.title}</h2>
                <div className="card shadow p-4">
                    <p><strong>Company Name:</strong>{job.companyName}</p>
                    <p><strong>Location:</strong>{job.location}</p>
                    <p><strong>Salary:</strong>{job.salary}</p>
                    <p><strong>Job Type:</strong>{job.jobType}</p>
                    <p><strong>Description:</strong>{job.description}</p>
                    <p><strong>Qualifications:</strong></p>
                        <ol>
                            {job.qualifications.map((q,idx)=>(
                                <li key={idx}>{q}</li>
                            ))}
                        </ol>
                    
                </div>
            </div>
        </>
    )
}
export default JobDetails;