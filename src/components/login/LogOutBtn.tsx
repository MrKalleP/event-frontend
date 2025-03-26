import { useAuth } from "../../hooks/useAuthHook";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";

const LogoutButton = () => {
    const auth = useAuth();
    const { user } = auth;

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        logout();
        navigate("/login");
    };

    return (<section style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "end",
        padding: "1rem"
    }}>
        <p style={{ textAlign: "center", color: "white" }}>{user?.userFirstName + " is logged in"}</p>
        <Button
            style={{
                textAlign: "center",
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