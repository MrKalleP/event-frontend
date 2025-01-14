
import { ConfigProvider } from "antd";

const ThemeProvider = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#1890ff",
                    borderRadiusLG: ".5rem",
                    fontSize: "16px",
                    colorBgLayout: "#f0f2f5",
                    colorBgContainer: "#ffffff",
                    paddingContentHorizontal: "24px",
                    paddingContentVertical: "24px",
                    marginSM: "12px",
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default ThemeProvider;