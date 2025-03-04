import { useAuth } from "../login/AuthContextLogin";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return <Button onClick={handleLogout}>Logga ut</Button>;
};

export default LogoutButton;