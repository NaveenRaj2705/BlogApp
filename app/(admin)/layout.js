const { default: AdminNavbar } = require("@/componet/AdminNavbar")

const AdminLayout=({children})=>{
    return(
        <div>
            <AdminNavbar/>
            {children}
        </div>
    )
}
export default AdminLayout;