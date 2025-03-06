import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthHook";

const PrivateRoute = () => {
    const { user } = useAuth();

    if (user === undefined) return <div>Loading...</div>;
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;