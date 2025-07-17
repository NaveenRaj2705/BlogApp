import UserNavbar from "@/componet/UserNavbar";


const UserLayout = ({children}) => {
    return(
        <div>
            <UserNavbar/>
            {children}
        </div>
    )
}
export default UserLayout;