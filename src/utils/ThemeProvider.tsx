
export const themeGlobal = {
    token: {
        colorPrimary: "darkblue",
        colorBgLayout: "#f5f5f5",
        colorBgContainer: "#ffffff",
        colorText: "rgba(0,0,0,0.88)",
        lineHeight: "1.6",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        paddingContentHorizontal: "16px",
        paddingContentVertical: "16px",
        marginSM: "12px",
        marginMD: "24px",
        marginLG: "32px",
    },
    components: {
        Layout: {
            backgroundColor: "#f5f5f5",
            paddingHorizontal: "16px",
            paddingVertical: "24px",
        },
        Sider: {
            backgroundColor: "#001529",
            width: "200px",
        },
        Footer: {
            backgroundColor: "#ffffff",
            textAlign: "center",
            padding: "16px 24px",
        },
        Menu: {
            itemHeight: "48px",
            fontSize: "16px",
        },
        Breadcrumb: {
            margin: "16px 0",
            fontSize: "14px",
            separator: "/",
        },
        Card: {
            padding: "24px",
            margin: "16px 0",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
        },
    },
    responsive: {
        breakpoints: {
            xs: "480px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1600px",
        },
    },
};