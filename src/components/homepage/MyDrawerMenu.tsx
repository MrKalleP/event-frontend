import { HomeOutlined, ProjectOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

interface MyDrawerProps {
    visible: boolean;
    onClose: () => void;
}

const MyDrawer = ({ visible, onClose }: MyDrawerProps) => {
    const location = useLocation();
    const menuItems = [
        { key: "/", label: "Home", icon: <HomeOutlined /> },
        { key: "/project", label: "Projects", icon: <ProjectOutlined /> },
    ];

    return (
        <Drawer
            title="Meny"
            placement="left"
            closable={true}
            onClose={onClose}
            open={visible}
        >
            <Menu
                mode="inline"
                style={{ padding: ".5rem" }}
                defaultSelectedKeys={[location.pathname]}
                selectedKeys={[location.pathname]}
            >
                {menuItems.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link style={{ marginInline: ".4rem" }} to={item.key} onClick={onClose}>
                            {item.label}
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Drawer>
    );
};

export default MyDrawer;