"use client"
import { useRouter } from "next/navigation";
const AdminNavbar=()=>{
    const router=useRouter();
    return(
        <div className="navbar">
            <div className="navbar-item1 navbar-logo">Blog - Admin</div>
            <div className="navbar-item2">
                <div className="nav-item" onClick={()=>{
                    router.push("/BlogA");
                }}>Blog</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/create");
                }}>Create</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/update");
                }}>Update</div>
                <div className="nav-item" onClick={() => {
                    router.push("/DeleteA");
                }}>Delete</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/LoginA");
                }}>Login</div>
            </div>
        </div>
    )
}
export default AdminNavbar;