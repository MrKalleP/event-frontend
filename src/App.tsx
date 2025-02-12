import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./utils/NotFound";
import MainLayout from "./components/homepage/MainLayout";
import SingleProjectPage from "./components/projects/SingleProjectPage";
import { ConfigProvider } from 'antd';
import { themeGlobal } from './utils/ThemeProvider.tsx';

const App: React.FC = () => {
  return (
    <ConfigProvider theme={themeGlobal}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/project/:projectId" element={<SingleProjectPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/project/*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;