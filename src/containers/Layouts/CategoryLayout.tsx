
import { Navbar } from "../../components";
import { Outlet, Navigate } from "react-router-dom";
import { Footer } from "../../components";

const CategoryLayout = () => {

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

export default CategoryLayout