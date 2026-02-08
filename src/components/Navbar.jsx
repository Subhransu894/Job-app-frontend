import {useNavigate} from "react-router-dom"
const Navbar = ()=>{
    const navigate = useNavigate()
    return(
        <nav style={{width:"100%",backgroundColor:"blue"}}>
           <div className="container d-flex flex-column flex-md-row align-items-start align-items-md-center px-4 py-3 shadow-sm" >
                <h3 className="m-0 mb-2 mb-md-0 me-md-4" style={{color:"white",cursor:"pointer",}} onClick={()=>navigate("/")}>
                    Intern House
                </h3>
                <h4 className="m-0 " style={{color:"gray",cursor:"pointer"}} onClick={()=>navigate("/post-job")}>
                    Post a Job
                </h4>
            </div> 
        </nav>
    )
}
export default Navbar;