
import { Navbar } from "../../components";
import { Outlet, Navigate } from "react-router-dom";

const ProtectLayout = () => {

    const token = localStorage.getItem("token");
    if (token) {

        return (
            <div>
                <Navbar/>
                <Outlet />
                <div>Masukan Token</div>
            </div>
        )
    }

    return <Navigate to="/" />
}

export default ProtectLayout