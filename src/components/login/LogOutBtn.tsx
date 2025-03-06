import { useAuth } from "../../hooks/useAuthHook";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (<section style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        height: "100vh",
        width: "100%",
    }}>
        <Button
            style={{
                padding: "1.2rem 2.4rem",
                fontSize: "16px",
                color: "var(--white-color-)",
                backgroundColor: "var(--error-color-)"
            }}
            onClick={handleLogout}
        >
            <LoginOutlined />
            Logga ut
        </Button>
    </section>)
};

export default LogoutButton;