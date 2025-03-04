import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../login/AuthContextLogin";

const PrivateRoute = () => {
    const { user } = useAuth();
    if (user === null) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
};

export default PrivateRoute;