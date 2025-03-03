
export const themeGlobal = {
    token: {
        colorPrimary: "#3A4DCB",
        colorBgLayout: "#F2F2F2",
        colorBgContainer: "white",
        colorText: "rgba(0,0,0,0.88)",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",

        colorLinkHover: "var(--errors-color-)",
    },
    components: {
        Menu: {
            itemHeight: 40,
            fontSize: 16,
        },
        Breadcrumb: {
            margin: 16,
            fontSize: 16,
            separator: "/",
        },
        Card: {
            padding: 32,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
        }
    },
    responsive: {
        breakpoints: {
            xs: 480,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1600,
        },
    },
};