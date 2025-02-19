import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { ProjectOutlined, HomeOutlined, MenuOutlined } from "@ant-design/icons";
import Logo from "../../utils/Logo";
import MyDrawer from "./MyDrawerMenu";
const { Content, Footer, Sider } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const location = useLocation();

    const menuItems = [
        { key: "/", label: "Home", icon: <HomeOutlined /> },
        { key: "/project", label: "Projects", icon: <ProjectOutlined /> },
    ];

    const breadcrumbItems = decodeURIComponent(location.pathname)
        .split("/")
        .filter((path) => path)
        .map((path, index, arr) => {
            const isLastItem = index === arr.length - 1;
            const formattedPath = path.replace(/å/g, "a");
            return {
                key: index,
                label: formattedPath,
                link: !isLastItem && formattedPath === "project" ? "/project" : null,
            };
        });

    return (
        <Layout>

            {!isMobile && (
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    breakpoint="md"
                    collapsedWidth="0"
                    trigger={null}
                    onBreakpoint={(broken) => setIsMobile(broken)}
                >

                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["/"]}
                        selectedKeys={[location.pathname]}
                        style={{ padding: ".5rem" }}
                    >    <Logo isCollapsed={collapsed} />
                        {menuItems.map((item) => (
                            <Menu.Item key={item.key} icon={item.icon} style={{ textAlign: "left", marginBlock: ".6rem" }}>
                                <Link style={{ marginInline: ".4rem" }} to={item.key}>{item.label}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>)}
            {isMobile && (
                <>
                    <Button
                        type="primary"
                        icon={<MenuOutlined />}
                        onClick={() => setDrawerVisible(true)}
                        style={{ position: "fixed", top: 5, right: 20, zIndex: 1000, marginTop: "1rem" }}
                    />

                    <MyDrawer
                        visible={drawerVisible}
                        onClose={() => setDrawerVisible(false)}
                    />
                </>
            )}
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
                <Footer style={{ textAlign: "center" }}>Event Logger ©{new Date().getFullYear()}</Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;





/*
Delar upp sökvägen (location.pathname) i en array av delar och tar bort tomma element.
Itererar över varje del av sökvägen.
För varje del skapar den ett objekt med:
key: Ett unikt ID baserat på index.
label: Namnet på delen som ska visas.
link: En URL om det inte är sista delen och segmentet är "project", annars null.
Returnerar en array av dessa breadcrumb-objekt.
 
split() delar upp en sträng i en array baserat på en angiven avgränsare
const text = "hello/world/example";
const result = text.split("/");
// result blir: ["hello", "world", "example"]
*/
