
import { Navbar } from "../../components";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components";

const CategoryLayout = () => {

    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default CategoryLayout