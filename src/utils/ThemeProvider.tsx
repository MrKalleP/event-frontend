
export const themeGlobal = {
    token: {
        colorPrimary: "darkblue",
        colorBgLayout: "#f5f5f5",
        colorBgContainer: "#ffffff",
        colorText: "rgba(0,0,0,0.88)",
        lineHeight: "1.6",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        paddingContentHorizontal: "1px",
        paddingContentVertical: "1px",
        marginSM: "12px",
        marginMD: "4px",
        marginLG: "3px",
    },
    components: {
        Layout: {
            backgroundColor: "#f5f5f5",
            paddingHorizontal: "6px",
            paddingVertical: "4px",
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
        }
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