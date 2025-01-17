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
        .map((path, index, arr) => {
            const isLastItem = index === arr.length - 1;
            return {
                key: index,
                label: path.charAt(0).toUpperCase() + path.slice(1),
                link: !isLastItem && path === "project" ? "/project" : null,
            };
        });

    return (
        <Layout>
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
                <Content>
                    <Breadcrumb style={{ margin: "3px" }}>
                        {breadcrumbItems.map((item) => (
                            <Breadcrumb.Item key={item.key}>
                                {item.link ? (
                                    <Link to={item.link}>{item.label}</Link>
                                ) : (
                                    item.label.toLowerCase()
                                )}
                            </Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <div>
                        <Outlet />
                    </div>
                </Content>
                <Footer>Event Logger ©{new Date().getFullYear()}</Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;