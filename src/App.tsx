import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./utils/NotFound";
import MainLayout from "./components/homepage/MainLayout";
import SingleProjectPage from "./components/projects/SingleProjectPage";
import { ConfigProvider } from 'antd';
import { themeGlobal } from './utils/ThemeProvider.tsx';

import LoginPage from './pages/LoginPage.tsx';
import PrivateRoute from "./components/login/PrivateRoute.tsx";
import { AuthProvider } from "./components/login/AuthContextLogin.tsx";


const App: React.FC = () => {
  return (
    <ConfigProvider theme={themeGlobal}>
      <AuthProvider >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<PrivateRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/project/:projectId" element={<SingleProjectPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider >
    </ConfigProvider>
  );
};

export default App;