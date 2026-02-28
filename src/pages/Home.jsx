import Navbar  from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
const Home = ()=>{
    const navigate = useNavigate()
    const [jobs,setJobs]=useState([])
    const [search,setSearch]=useState("")
    const [loading,setLoading]=useState(true)
    
    const filterJob = jobs.filter((job)=>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.companyName.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase()) ||
        job.jobType.toLowerCase().includes(search.toLowerCase())
    )

    useEffect(()=>{
        fetch("https://job-app-backend-alpha.vercel.app/jobs")
        .then((res)=>res.json())
        .then((data)=>{
            setJobs(data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    },[])

    //delete job
    const handleDelete = async(id)=>{
        if(!window.confirm("Are you sure you want to delete this job? ")) return;

        try {
            const res = await fetch(`https://job-app-backend-alpha.vercel.app/jobs/${id}`,{
                method:"DELETE",
            })
            if(!res.ok){
                throw new Error("Failed to delete job")
            }
            //remove the deleted job from ui 
            setJobs(jobs.filter((job)=>job._id !== id))
        } catch (error) {
            console.error(error)
            alert("Failed to Delete job")
        }
    }
    return(
        <>
        <Navbar />
        <div className="container mt-4">
            <input type="text" className="form-control mb-3" placeholder="search jobs..."
                value={search} onChange={(e)=>setSearch(e.target.value)} 
            />
            <h3 className="mb-4">All Jobs</h3>
            {/* all job cards */}
            <div className="row g-3">
                {loading? ( <p className="text-center">Loading Jobs...</p> ) : filterJob.length > 0 ? (filterJob.map((job)=>(
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={job._id}>
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title">{job.title}</h5>
                                <p className="card-text"><strong>Company Name:</strong>{job.companyName}</p>
                                <p className="card-text"><strong>Location:</strong>{job.location}</p>
                                <p className="card-text"><strong>Job Type:</strong>{job.jobType}</p>
                                <div className="d-flex mt-auto gap-2 flex-wrap">
                                    <button className="btn btn-primary btn-sm flex-grow-1 flex-sm-grow-0" 
                                        onClick={()=>navigate(`/jobs/${job._id}`)}
                                    >See Details</button>
                                    <button className="btn btn-danger btn-sm flex-grow-1 flex-sm-grow-0"
                                        onClick={()=>handleDelete(job._id)}
                                    >Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))):(
                    <p className="text-center">No Jobs Found</p>
                )
                }
            </div>
        </div>
        </>
    )
}
export default Home;