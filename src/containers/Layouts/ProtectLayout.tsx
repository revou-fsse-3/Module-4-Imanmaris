
import { Navbar } from "../../components";
import { Outlet, Navigate} from "react-router-dom";
import { Footer } from "../../components";

const ProtectLayout = () => {
    
    // return (
    //     <div>
    //         <Navbar/>
    //         <Outlet />
    //         <Footer/>
    //     </div>
    // )
    const token = localStorage.getItem("token");
    if (token) {

        return (
            <div>
                <Navbar/>
                <Outlet />
                <Footer/>
            </div>
        )
    }

    return <Navigate to="/Product-specification" />
}

export default ProtectLayout