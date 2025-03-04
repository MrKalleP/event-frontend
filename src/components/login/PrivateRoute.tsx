import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthHook";

const PrivateRoute = () => {

    const { user } = useAuth();

    if (user === null) {
        return <section>Loading...</section>;
    }
    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;