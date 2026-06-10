import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {FaEye, FaEyeSlash} from "react-icons/fa"
const Register =()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [showPassword,setShowPassword] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const res = await fetch("https://job-app-backend-alpha.vercel.app/auth/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({email,password})
        })
        const data = await res.json()
        alert(data.message)
        if (res.ok) {
            navigate("/login");
        }
    }
    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4" style={{width:"350px"}}>
            <h2 className="text-center mb-3">Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" className="form-control mb-3" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <div className="position-relative mb-3">
                    <input 
                        type={showPassword ? "text" :"password"} 
                        className="form-control mb-3" 
                        placeholder="Enter Password" 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)} 
                    />
                    <span onClick={()=>setShowPassword(!showPassword)}
                        style={{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",cursor:"pointer"}}
                    >
                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </span>
                </div>
                <button className="btn btn-primary w-100">Register</button>
                <p className="text-center mt-3 mb-0">
                    Already have an account?{" "}
                    <span
                    onClick={() => navigate("/login")}
                    style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "blue",
                    }}
                    >
                    Login
                    </span>
                </p>
            </form>
        </div>
        </div>
    )
}
export default Register;