import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { ProjectOutlined, HomeOutlined } from "@ant-design/icons";
import Logo from "../../utils/Logo";
const { Content, Footer, Sider } = Layout;


const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const menuItems = [
        { key: "/", label: "Home", icon: <HomeOutlined /> },
        { key: "/project", label: "Projects", icon: <ProjectOutlined /> },
    ];

    const breadcrumbItems = location.pathname
        .split("/")
        .filter((path) => path)
        .map((path, index) => ({
            key: index,
            label: path.charAt(0) + path.slice(1),
        }));

    const normalizeText = (text) => {
        return text
            .replace(/å/g, "a")
            .replace(/ä/g, "a")
            .replace(/ö/g, "o")
            .replace(/Å/g, "A")
            .replace(/Ä/g, "A")
            .replace(/Ö/g, "O");
    };



    return (
        <Layout >
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <Logo isCollapsed={collapsed} />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["/"]}
                    selectedKeys={[location.pathname]}
                    style={{ padding: ".5rem" }}
                >
                    {menuItems.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon} style={{ textAlign: "left", marginBlock: ".6rem" }}>
                            <Link style={{ marginInline: ".4rem" }} to={item.key}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout>
                <Content >
                    <Breadcrumb style={{ margin: "3px" }}>
                        {breadcrumbItems.map((item) => (
                            <Breadcrumb.Item key={item.key} >
                                <Link to="/project">
                                    {item.label}
                                </Link>
                            </Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <div
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer >Event Logger ©{new Date().getFullYear()}</Footer>
            </Layout>
        </Layout>

    );
};

export default MainLayout

