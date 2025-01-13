import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Layout, Menu, Breadcrumb, theme } from "antd";
import { ProjectOutlined, HomeOutlined } from "@ant-design/icons";
import Logo from "../../utils/Logo";
const { Content, Footer, Sider } = Layout;


const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    const menuItems = [
        { key: "/", label: "Home", icon: <HomeOutlined /> },
        { key: "/project", label: "Projects", icon: <ProjectOutlined /> },
    ];

    const breadcrumbItems = location.pathname
        .split("/")
        .filter((path) => path)
        .map((path, index) => ({
            key: index,
            label: path.charAt(0).toUpperCase() + path.slice(1),
        }));

    return (
        <Layout style={{ minHeight: "100vh", background: "rgba(0, 0, 0, 0.01)" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <Logo isCollapsed={collapsed} />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["/"]}
                    selectedKeys={[location.pathname]}
                >
                    {menuItems.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <Link to={item.key}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: "0", height: "100%" }}>
                    <Breadcrumb style={{ margin: "3px" }}>
                        {breadcrumbItems.map((item) => (
                            <Breadcrumb.Item key={item.key}>{item.label}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 14,
                            background: "rgba(0, 0, 0, 0.01)",
                            color: "#fafafa",
                            borderRadius: borderRadiusLG,
                            height: "100%",
                            margin: "1.3rem"
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>Event Logger ©{new Date().getFullYear()}</Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout