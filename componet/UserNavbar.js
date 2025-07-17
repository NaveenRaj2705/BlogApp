"use client"
import { useRouter } from "next/navigation";

const UserNavbar=()=>{
    const router=useRouter();
    return(
        <div className="navbar">
            <div className="navbar-item1 navbar-logo"> Blog - User</div>
            <div className="navbar-item2">
                <div className="nav-item" onClick={()=>{
                    router.push("/BlogU");
                }}>Blog</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/signupU");
                }}>Signup</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/LoginU");
                }}>Login</div>
            </div>
        </div>
    )
}
export default UserNavbar;