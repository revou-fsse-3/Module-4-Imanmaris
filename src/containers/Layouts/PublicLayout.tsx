
import { Navbar } from "../../components";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {

    return (
        <div>
            <Navbar/>
            <Outlet />
            <div>Footer</div>
        </div>
    )
}

export default PublicLayout