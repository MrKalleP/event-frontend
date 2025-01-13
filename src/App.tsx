import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./utils/NotFound";
import MainLayout from "./components/homepage/MainLayout";
import SingleProjectPage from "./components/projects/SingleProjectPage";
import { ConfigProvider } from "antd";

const App: React.FC = () => {

  const theme = {
    token: {
      colorPrimary: "#FBFBFB",
      pagePadding: "1rem"
    }
  }
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/project/:projectName" element={<SingleProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;