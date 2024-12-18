import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Layout, Menu, Breadcrumb, theme } from "antd";
import { ProjectOutlined, HomeOutlined } from "@ant-design/icons";
import Logo from "./Logo";



const { Content, Footer, Sider } = Layout;

const MainLayout: React.FC = () => {
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
        <Layout style={{ minHeight: "100vh", background: "#07495b" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <Logo />

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["/"]}
                    selectedKeys={[location.pathname]}>
                    {menuItems.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <Link to={item.key}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout>

                <Content style={{ margin: "10px" }}>
                    <Breadcrumb style={{ margin: "2px 0" }}>
                        {breadcrumbItems.map((item) => (
                            <Breadcrumb.Item key={item.key}>{item.label}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            maxWidth: 'calc(100% - 8px)',
                            background: "#07495b",
                            color: "#fafafa",
                            borderRadius: borderRadiusLG,
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