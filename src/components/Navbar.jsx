import {useNavigate} from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"
const Navbar = ()=>{
    const [isOpen, setIsOpen]=useState(false)
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        navigate("/login",{replace:true})
    }
    return(
        <nav style={{width:"100%",backgroundColor:"blue"}}>
            <div className="container px-4 py-3 shadow-sm">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="m-0" style={{color:"white",cursor:"pointer"}} onClick={()=>navigate("/")}>
                        Intern House
                    </h3>
                    {/* Hamburgur button */}
                    <button className="btn text-white d-md-none" onClick={()=>setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes size={22}/> : <FaBars size={22} /> }
                    </button>
                    {/* Destop menu */}
                    <div className="d-none d-md-flex align-items-center ms-auto gap-4">
                        <h5 className="m-0" style={{color:"white",cursor:"pointer"}} onClick={()=>navigate("/post-job")}>
                            Post a Job
                        </h5>
                        {token && (
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        )}
                    </div>
                </div>
                {/* Mobile menu */}
                {isOpen && (
                    <div className="d-md-none mt-3">
                        <h5 className="m-0" style={{color:"white",cursor:"pointer"}}
                         onClick={()=>{
                                navigate("/post-job")
                                setIsOpen(false)
                            }}>
                            Post a Job
                        </h5>
                        {token && (
                            <button className="btn btn-danger mt-2" onClick={handleLogout}>Logout</button>
                        )}
                    </div>
                )}
            </div> 
        </nav>
    )
}
export default Navbar;